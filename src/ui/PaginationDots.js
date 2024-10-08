import React, { useEffect, useRef, useMemo } from "react";
import { StyleSheet, View, Animated } from "react-native";

const dotInactiveSize = 5; // Inactive dot size
const dotActiveSize = 10; // Active dot size
const dotWidth = 20; // Base dot size + margin for calculation purposes

const PaginationDots = ({ images, currentIndex }) => {
  const maxVisibleDots = 3; // Maximum number of visible dots
  const translateX = useRef(new Animated.Value(0)).current; // Animation for sliding dots

  // Create an array of Animated.Value for each dot
  const animations = useRef(images.map(() => new Animated.Value(0))).current;

  // Trigger dot size/opacity animation when currentIndex changes
  useEffect(() => {
    animations.forEach((animation, index) => {
      Animated.timing(animation, {
        toValue: currentIndex === index ? 1 : 0, // 1 for active, 0 for inactive
        duration: 50, // No delay for smoothness
        useNativeDriver: false, // We need this to be false since we are animating style properties
      }).start();
    });

    // Calculate how much to slide the dots based on currentIndex
    const slideToIndex = Math.min(
      Math.max(currentIndex - 1, 0), // Ensure we don't go below index 0
      images.length - maxVisibleDots // Ensure we don't go beyond available dots
    );

    Animated.timing(translateX, {
      toValue: -slideToIndex * dotWidth, // Move dots to the left/right
      duration: 150, // Adjust the duration for smooth sliding
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [currentIndex]);

  // Memoize the dots array
  const dots = useMemo(() => {
    return images.map((_, index) => {
      // Interpolate the animation value to animate the size and opacity
      const dotSize = animations[index].interpolate({
        inputRange: [0, 1],
        outputRange: [dotInactiveSize, dotActiveSize], // Inactive dot size to active dot size
      });
      const dotOpacity = animations[index].interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 1], // Inactive to active opacity
      });

      // Calculate the vertical shift to center the active dot
      const translateY = animations[index].interpolate({
        inputRange: [0, 1],
        outputRange: [0, -(dotActiveSize - dotInactiveSize) / 2], // Shift the active dot up by half the size difference
      });

      // Adjust margin dynamically
      const dotMargin = animations[index].interpolate({
        inputRange: [0, 1],
        outputRange: [7.5, 5], // Adjust margin to compensate for size change
      });

      return (
        <Animated.View
          key={index}
          style={[
            styles.dot,
            {
              width: dotSize,
              height: dotSize,
              opacity: dotOpacity,
              marginHorizontal: dotMargin, // Adjust margin dynamically
              transform: [{ translateY }], // Adjust the active dot's vertical alignment
            },
          ]}
        />
      );
    });
  }, [images, currentIndex]);

  return (
    <View style={styles.paginationContainer}>
      <View style={styles.dotWrapperContainer}>
        <Animated.View
          style={[
            styles.dotWrapper,
            {
              transform: [{ translateX }], // Slide the dots container
              width: images.length * dotWidth, // Set width based on total number of dots
            },
          ]}
        >
          {dots}
        </Animated.View>
      </View>
    </View>
  );
};

// Wrap the functional component with React.memo to avoid re-rendering unless props change
export default React.memo(PaginationDots);

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center', // Center the dots
    alignItems: 'center',
    overflow: 'hidden', // Hide dots that slide outside the visible range
    width: '100%', // Set the container to be the width of the screen
  },
  dotWrapperContainer: {
    width: dotWidth * 3, // Limit to 4 dots visible at a time
    overflow: 'hidden', // Ensure that extra dots don't show
    height: dotActiveSize,
    paddingVertical: 10
  },
  dotWrapper: {
    flexDirection: 'row',
  },
  dot: {
    borderRadius: 5,
    backgroundColor: 'white', // Ensure background color is white
  },
});
