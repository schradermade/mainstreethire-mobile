import React, { useState, useRef } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORY_LIST } from '../../../constants';
import CategoryTile from './CategoryTile';
import { spacing, colors } from '../../../theme/theme';
import * as Haptics from 'expo-haptics';

const { width: windowWidth } = Dimensions.get('window');

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    CATEGORY_LIST[0].title
  ); // Set first item as default selected
  const [itemWidths, setItemWidths] = useState([]); // Store widths of each item
  const flatListRef = useRef(null);
  const lastSelectedIndexRef = useRef(null); // Store the last selected index

  // Handler to capture the width of each item when it's laid out
  const handleItemLayout = (event, index) => {
    const { width } = event.nativeEvent.layout;

    setItemWidths((prevWidths) => {
      const updatedWidths = [...prevWidths];
      updatedWidths[index] = width + spacing.medium;
      return updatedWidths;
    });
  };

  const calculateSnapOffsets = () => {
    let offsets = [];
    let currentOffset = spacing.xxlarge;
    for (let width of itemWidths) {
      offsets.push(currentOffset - (windowWidth - width) / 2); // Center the item
      currentOffset += width;
    }
    return offsets;
  };

  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.x;

    // Calculate the total width as the user scrolls
    let totalWidth = 0;
    let selectedIndex = 0;

    for (let i = 0; i < itemWidths.length; i++) {
      totalWidth += itemWidths[i] - spacing.medium;

      // Stop if we've reached the center of the screen
      if (totalWidth >= currentOffset + itemWidths[i] / 2) {
        selectedIndex = i;
        break;
      }
    }

    if (CATEGORY_LIST[selectedIndex]) {
      // Only trigger haptics if the selected item has changed
      if (lastSelectedIndexRef.current !== selectedIndex) {
        Haptics.selectionAsync(); // Trigger haptic feedback
        lastSelectedIndexRef.current = selectedIndex; // Update the last selected index
      }
      setSelectedCategory(CATEGORY_LIST[selectedIndex].title);
    }
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={CATEGORY_LIST}
        keyExtractor={(category) => category.title}
        renderItem={({ item, index }) => {
          const isSelected = item.title === selectedCategory;
          return (
            <View
              style={{ marginRight: spacing.medium }}
              onLayout={(event) => handleItemLayout(event, index)} // Capture the width of each item
            >
              <CategoryTile
                title={item.title}
                iconName={item.iconName}
                isSelected={isSelected}
              />
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        horizontal={true}
        onScroll={handleScroll}
        snapToAlignment="center"
        snapToOffsets={calculateSnapOffsets()}
        decelerationRate="fast"
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingLeft: spacing.xxlarge,
    paddingBottom: spacing.xlarge,
    borderBottomColor: colors.borderColorDark,
    borderBottomWidth: 0.25,
  },
});

export default CategoryList;
