import React, { useState } from "react";
import CategoryTile from "./CategoryTile";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORY_LIST } from "../../constants"; 

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); 

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORY_LIST}
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
        contentContainerStyle={styles.flatListContent}  // Padding adjusted to allow smooth scrolling
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {    
  },
  flatListContent: {
  },
});

export default CategoryList;
