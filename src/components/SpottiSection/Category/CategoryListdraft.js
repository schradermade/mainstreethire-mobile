import React, { useState, useRef } from "react";
import CategoryTile from "./CategoryTile";
import { StyleSheet, View, Animated } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORY_LIST } from "../../../constants"; 
import { spacing, colors, borderRadius } from "../../../theme/theme";
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [scrollX, setScrollX] = useState(0);
  const flatListRef = useRef(null);
  const translateY = useRef(new Animated.Value(0)).current; // Track the modal drop-down position
  const MAX_EXPAND_HEIGHT = 300; // Maximum expansion height for additional categories

  // For horizontal scrolling
  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.x;
    setScrollX(currentOffset); 
  };

  const handleScrollEnd = () => {
    if (scrollX < -50) {
      flatListRef.current.scrollToOffset({ offset: 30, animated: true });
    }
  };

  // Handle pull down to reveal more categories
  const handleDragEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: false }
  );

  const handleDragStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      const clampedY = Math.min(nativeEvent.translationY, MAX_EXPAND_HEIGHT);

      if (clampedY > 50) {
        // If dragged far enough, fully expand the category list
        Animated.timing(translateY, {
          toValue: MAX_EXPAND_HEIGHT,
          duration: 300,
          useNativeDriver: false,
        }).start();
      } else {
        // Snap back if not enough drag distance
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Horizontal scrollable category list */}
      <FlatList
        ref={flatListRef}
        data={CATEGORY_LIST.slice(0, 6)} // Show first 6 categories for horizontal scroll
        keyExtractor={(category) => category.title}
        renderItem={({ item }) => {
          return (
            <CategoryTile
              title={item.title}
              iconName={item.iconName}
              isSelected={item.title === selectedCategory}
              onPress={() => setSelectedCategory(item.title)}  
            />
          );
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        horizontal={true}
        onScroll={handleScroll}
        onScrollEndDrag={handleScrollEnd}
      />

      {/* Drag handle for pulling down the modal */}
      <PanGestureHandler
        onGestureEvent={handleDragEvent}
        onHandlerStateChange={handleDragStateChange}
      >
        <Animated.View
          style={[
            styles.modalHandleContainer,
            {
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [0, MAX_EXPAND_HEIGHT],
                    outputRange: [0, MAX_EXPAND_HEIGHT],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.modalHandle} />
          
          <Animated.View
            style={[
              styles.expandingContent,
              {
                height: translateY.interpolate({
                  inputRange: [0, MAX_EXPAND_HEIGHT],
                  outputRange: [0, MAX_EXPAND_HEIGHT],
                  extrapolate: 'clamp',
                }),
                overflow: 'hidden', // Ensures smooth reveal
              },
            ]}
          >
            <FlatList
              data={CATEGORY_LIST.slice(6)} // Show the remaining categories when expanded
              keyExtractor={(category) => category.title}
              renderItem={({ item }) => (
                <CategoryTile
                  title={item.title}
                  iconName={item.iconName}
                  onPress={() => setSelectedCategory(item.title)}
                />
              )}
              contentContainerStyle={styles.flatListContent}
            />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1.5,
    borderColor: colors.borderColorDark,
  },
  flatListContent: {
    paddingLeft: spacing.xxlarge,
  },
  modalHandleContainer: {
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
  },
  modalHandle: {
    height: 5, 
    width: 40, 
    borderRadius: 25,
    backgroundColor: colors.borderColorDark,
    alignSelf: 'center',
    marginVertical: spacing.small,
  },
  expandingContent: {
    width: '100%',
    borderTopLeftRadius: borderRadius.large,
    borderTopRightRadius: borderRadius.large,
  },
});

export default CategoryList;
