import React, { forwardRef } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { borderRadius, spacing } from '../theme/theme';

const SLIDER_WIDTH = Dimensions.get('window').width;

const ImageCarousel = forwardRef(({ 
  images, 
  applyBorderRadius = false, 
  isFullView = false },
  ref
) => {
  const borderRadiusValue = applyBorderRadius ? borderRadius.large : 0;
  const widthValue = isFullView ? SLIDER_WIDTH : SLIDER_WIDTH - spacing.xxlarge*2

  return (
      <View ref={ref}>
        <Carousel
          data={images}
          renderItem={({ item }) => (
            <View style={[
                styles.imageWrapper, 
                {borderRadius: borderRadiusValue}
              ]}
            >
              <Image 
                source={item} 
                style={{
                  height: widthValue, 
                  width: widthValue, 
                  maxHeight: isFullView ? widthValue-50 : widthValue,
                }} 
                resizeMode="cover"
              />
            </View>
          )}
          width={widthValue}
          height={isFullView ? widthValue-50 : widthValue}
          loop={true}
          autoPlay={false}
          scrollAnimationDuration={1000} 
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
            failOffsetY: [-10, 10],
          }}
        />
      </View>
  );
});

const styles = StyleSheet.create({
  imageWrapper: {
    overflow: 'hidden',
  },

});

export default ImageCarousel;
