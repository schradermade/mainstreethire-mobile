import React from "react";
import SavedListTile from "./SavedListTile";
import { SAVED_LISTS } from "../../constants";
import SavedCreateNewList from "./SavedCreateNewList";
import { ScrollView, StyleSheet } from "react-native";

const SavedLists = () => {
  return (
    <>
      <SavedCreateNewList />
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.scrollViewContent}
      >
        {SAVED_LISTS.map((list, index) => (
          <SavedListTile key={index} list={list} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 150,
  },
});

export default SavedLists;
