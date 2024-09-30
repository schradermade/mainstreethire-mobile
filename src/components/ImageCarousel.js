import React, { forwardRef } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { spacing } from '../theme/theme';

const SLIDER_WIDTH = Dimensions.get('window').width - spacing.xxlarge*2;

const ImageCarousel = forwardRef(({ images }, ref) => {
  return (
      <View ref={ref}>
        <Carousel
          data={images}
          renderItem={({ item }) => (
            <View style={styles.imageWrapper}>
              <Image source={item} style={styles.image} resizeMode="cover" />
            </View>
          )}
          width={SLIDER_WIDTH}
          height={SLIDER_WIDTH}
          loop={true}
          autoPlay={false}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10], // To make the swipes more responsive
          }}
        />
      </View>
  );
});

const styles = StyleSheet.create({
  imageWrapper: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: SLIDER_WIDTH, // Fill the available width
    height: SLIDER_WIDTH, // Fill the available height
  },
});

export default ImageCarousel;
