import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Modal,
  Dimensions,
  Easing,
} from 'react-native';
import { borderRadius, colors, spacing, shadowRadius } from '../theme/theme';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');
const MIN_TRANSLATE_Y = 0; // Modal should not go above this (100px below the top)

const SlideUpModal = ({ isVisible, setVisible, children }) => {
  const translateY = useState(new Animated.Value(height))[0]; // Initialize translateY
  const lastGestureY = useState(new Animated.Value(0))[0]; // To track the last gesture Y position

  useEffect(() => {
    if (isVisible) {
      openModal();
    }
  }, [isVisible]);

  const openModal = () => {
    // Reset translateY and lastGestureY when the modal opens
    lastGestureY.setValue(0);
    translateY.setValue(height);

    Animated.timing(translateY, {
      toValue: MIN_TRANSLATE_Y, // Bring it up to 100px below the top
      duration: 400,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(translateY, {
      toValue: height, // Slide back down to the bottom
      duration: 200,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      translateY.setValue(height); // Reset position after close
    });
  };

  // Add this update to allow the modal to follow the finger's drag
  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      const dragThreshold = 100; // Distance needed to trigger closing
      const newTranslateY =
        nativeEvent.translationY + nativeEvent.velocityY * 0.1; // Factor in velocity

      if (newTranslateY > dragThreshold) {
        closeModal(); // Close modal if pulled down enough
      } else {
        // Ensure the modal stays at least 100px below the top
        Animated.spring(translateY, {
          toValue: MIN_TRANSLATE_Y, // Snap back to 100px from the top
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
    <Modal
      transparent
      visible={isVisible}
      animationType="none"
      onRequestClose={closeModal}
    >
      <View style={styles.modalBackground}>
        <TouchableOpacity
          style={StyleSheet.absoluteFillObject}
          onPress={closeModal}
          activeOpacity={1}
        />
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View
            style={[
              styles.modalContainer,
              {
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [0, height],
                      outputRange: [0, height],
                      extrapolate: 'clamp', // Prevent modal from going above the top
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.modalHandle} />
            {children}
          </Animated.View>
        </PanGestureHandler>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    height: height - 100,
    borderTopLeftRadius: borderRadius.xxlarge,
    borderTopRightRadius: borderRadius.xxlarge,
    backgroundColor: colors.primaryColor,
    shadowColor: colors.shadowEffectBlack,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: shadowRadius.xsmall,
  },
  modalHandle: {
    height: 4,
    width: 45,
    borderRadius: 25,
    backgroundColor: colors.borderColorDark,
    alignSelf: 'center',
    marginTop: spacing.medium,
  },
});

export default SlideUpModal;
