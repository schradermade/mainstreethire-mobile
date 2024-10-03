import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated, Modal, Dimensions, TouchableOpacity } from "react-native";
import { borderRadius, colors, iconSize, spacing } from "../../theme/theme";
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import RoundActionButton from "../../ui/RoundActionButton";
import EditModalContents from "./EditModalContents";

const { height } = Dimensions.get('window');

const SavedListEditModal = ({ isVisible, setVisible, title }) => {
  const translateY = useState(new Animated.Value(height))[0]; // Initialize translateY
  const lastGestureY = useState(new Animated.Value(0))[0]; // To keep track of the last Y position after release

  useEffect(() => {
    if (isVisible) {
      openModal();
    }
  }, [isVisible]);

  const openModal = () => {
    translateY.setValue(height);
    Animated.timing(translateY, {
      toValue: 30, // Bring it up
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(translateY, {
      toValue: height, // Slide back down to the bottom
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      translateY.setValue(height);
    })
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: lastGestureY } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      const dragThreshold = 100; // Distance needed to trigger closing
      const newTranslateY = nativeEvent.translationY + nativeEvent.velocityY * 0.1; // Factor in velocity

      if (newTranslateY > dragThreshold) {
        closeModal(); // Close modal if pulled down enough
      } else {
        Animated.spring(translateY, {
          toValue: 100, // Snap back to open position
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
            style={[styles.modalContainer, { transform: [{ translateY: Animated.add(translateY, lastGestureY) }] }]}
          >
            <View style={styles.closeButtonWrapper}>
              <RoundActionButton 
                iconName={'close'} 
                iconSize={iconSize.small} 
                iconColor={colors.offWhiteFont}
                onIconPress={closeModal}
              />
            </View>
              <EditModalContents listName={title} />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    height: height - 30,
    borderTopLeftRadius: borderRadius.large,
    borderTopRightRadius: borderRadius.large,
    padding: spacing.large,
    backgroundColor: colors.primaryModalColor, 
  },
  closeButtonWrapper: {
    alignSelf: 'flex-start', 
  },
});

export default SavedListEditModal;