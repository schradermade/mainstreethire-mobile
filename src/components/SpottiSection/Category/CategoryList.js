import React, { useState, useRef } from "react";
import CategoryTile from "./CategoryTile";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORY_LIST } from "../../../constants"; 
import { spacing } from "../../../theme/theme";

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [scrollX, setScrollX] = useState(0); //
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.x;
    setScrollX(currentOffset); 
  };

  const handleScrollEnd = () => {
    if (scrollX < -50) {
      flatListRef.current.scrollToOffset({ offset: 30, animated: true });
    }
  };

  return (
      <FlatList
        ref={flatListRef}
        data={CATEGORY_LIST}
        keyExtractor={(category) => category.title}
        renderItem={({ item }) => {
          return (
            <CategoryTile
              title={item.title}
              iconName={item.iconName}
              isSelected={item.title === selectedCategory}
              onPress={() => setSelectedCategory(item.title)}  
              styling={{marginRight: spacing.medium}}
            />
          );
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        horizontal={true}
        onScroll={handleScroll}
        onScrollEndDrag={handleScrollEnd}
      />
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingLeft: spacing.xxlarge,
    paddingBottom: spacing.xxxlarge
  },
});

export default CategoryList;
