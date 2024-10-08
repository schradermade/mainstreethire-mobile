import React, { forwardRef, useState, useCallback } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { borderRadius, spacing, colors } from '../theme/theme';
import { imagePathFormat } from '../utils/imagePathFormat';
import PaginationDots from '../ui/PaginationDots';

const SLIDER_WIDTH = Dimensions.get('window').width;

const ImageCarousel = forwardRef(({ 
  images, 
  isFullView = false,
  onSwipeStart,  // Add swipe start prop
  onSwipeEnd },  // Add swipe end prop
  ref
) => {
  const widthValue = isFullView ? SLIDER_WIDTH : SLIDER_WIDTH - spacing.xxlarge * 2;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize the renderItem function to prevent re-creating it on every render
  const renderItem = useCallback(({ item }) => (
    <Image
      key={item.uri}
      source={item} 
      style={{ 
        height: widthValue, 
        width: widthValue, 
      }}
      resizeMode="cover"
    />
  ), [widthValue]);

  // Handle snapping based on swipe progress (trigger at halfway point)
  const handleProgressChange = useCallback((_, progress) => {
    const progressFloor = Math.floor(progress);  // Current image index based on swipe progress
    const halfwayPoint = progress % 1 >= 0.5 ? progressFloor + 1 : progressFloor;
    
    if (halfwayPoint !== currentIndex) {
      setCurrentIndex(halfwayPoint); // Update the index when progress reaches halfway
    }
  }, [currentIndex]);

  // Use onSnapToItem for final index update
  const handleSnapToItem = useCallback((index) => {
    setCurrentIndex(index); // Ensure final snap update after swipe completes
  }, []);

  return (
    <View ref={ref} style={styles.container}>
      <Carousel
        data={imagePathFormat(images)}
        onSnapToItem={handleSnapToItem} // Final snap index
        onProgressChange={handleProgressChange} // Track progress for snappy mid-point updates
        renderItem={renderItem}
        width={widthValue}
        height={widthValue}
        loop={false}
        autoPlay={false}
        scrollAnimationDuration={200}
        panGestureHandlerProps={{
          activeOffsetX: [-3, 3],
          failOffsetY: [-12, 12],
        }}
        style={{
          borderRadius: isFullView ? 0 : borderRadius.large, 
          overflow: 'hidden',
        }}
      />
      <PaginationDots 
        images={images}
        currentIndex={currentIndex}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    shadowColor: colors.black,
    shadowOffset: { width: -1.5, height: 1 },
    shadowOpacity: .3,
    shadowRadius: borderRadius.small,
  }
})

export default React.memo(ImageCarousel);
