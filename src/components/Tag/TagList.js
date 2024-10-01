import React from "react";
import { StyleSheet, View } from "react-native";
import TagTile from "./TagTile";

const TagList = ({ tags }) => {
  return (
    <View style={styles.container}>
      {tags.map((tag, index) => (
        <TagTile key={index} tag={tag} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default TagList;