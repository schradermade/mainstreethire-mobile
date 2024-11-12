import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Modal,
  Dimensions,
  Easing,
  Text,
} from 'react-native';
import { borderRadius, colors, spacing, shadowRadius } from '../theme/theme';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Divider from '../ui/Divider';

const { height } = Dimensions.get('window');
const MIN_TRANSLATE_Y = 0; // Modal should not go above this (100px below the top)

const SlideUpModal = ({
  isVisible,
  setVisible,
  children,
  modalHeader = () => {},
}) => {
  const translateY = useState(new Animated.Value(height))[0];
  const overlayOpacity = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (isVisible) {
      openModal();
    }
  }, [isVisible]);

  const openModal = () => {
    overlayOpacity.setValue(0);
    Animated.timing(overlayOpacity, {
      toValue: 0.95, // Set to desired background opacity level (e.g., 0.5 for 50%)
      duration: 400,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY, {
      toValue: MIN_TRANSLATE_Y,
      duration: 400,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(overlayOpacity, {
      toValue: 0, // Fade out the background
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY, {
      toValue: height,
      duration: 200,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      translateY.setValue(height);
    });
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      const dragThreshold = 100;
      const newTranslateY =
        nativeEvent.translationY + nativeEvent.velocityY * 0.1;

      if (newTranslateY > dragThreshold) {
        closeModal();
      } else {
        Animated.spring(translateY, {
          toValue: MIN_TRANSLATE_Y,
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
      {/* Separate overlay for background opacity */}
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: colors.lightGray, opacity: overlayOpacity },
        ]}
      />

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
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.modalHandle} />
            <View style={styles.modalHeaderContainer}>{modalHeader()}</View>
            <Divider />
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
    paddingHorizontal: spacing.medium,

    height: height - 100,
    borderTopLeftRadius: borderRadius.xxlarge,
    borderTopRightRadius: borderRadius.xxlarge,
    backgroundColor: colors.darkGray,
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
  modalHeaderContainer: {
    paddingVertical: spacing.xsmall,
  },
});

export default SlideUpModal;
