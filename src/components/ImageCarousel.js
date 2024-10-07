import React, { forwardRef } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { borderRadius, spacing } from '../theme/theme';
import { imagePathFormat } from '../utils/imagePathFormat';

const SLIDER_WIDTH = Dimensions.get('window').width;

const ImageCarousel = forwardRef(({ 
  images, 
  isFullView = false,
  onSwipeStart,  // Add swipe start prop
  onSwipeEnd },  // Add swipe end prop
  ref
) => {
  const widthValue = isFullView ? SLIDER_WIDTH : SLIDER_WIDTH - spacing.xxlarge * 2;

  return (
    <View 
      ref={ref}
    >
      <Carousel
        data={imagePathFormat(images)}
        renderItem={({ item }) => (
          <Image
            key={item.uri}
            source={item} 
            style={{ 
                height: widthValue, 
                width: widthValue, 
              }}
            resizeMode="cover"
          />
        )}
        width={widthValue}
        height={widthValue}
        loop={true}
        autoPlay={false}
        scrollAnimationDuration={1000}
        // onScrollBeginDrag={console.log("ONSCROLLBEGINDRAG")}  // Call swipe start
        // onScrollEndDrag={console.log("ONSCROLLENDDRAG")}  // Call swipe end
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
          failOffsetY: [-10, 10],
        }}
        style={{
          borderRadius: isFullView ? 0 : borderRadius.large, 
          overflow: 'hidden'
        }}
      />
    </View>
  );
});

export default ImageCarousel;
