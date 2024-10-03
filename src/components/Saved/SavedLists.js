import React from "react";
import SavedListTile from "./SavedListTile";
import { SAVED_LISTS } from "../../constants";
import SavedCreateNewList from "./SavedCreateNewList";
import { ScrollView } from "react-native";

const SavedLists = () => {

  return (
    <>
      <SavedCreateNewList />
      <ScrollView
        showsVerticalScrollIndicator={true}
      >
        {
          SAVED_LISTS.map((list, index) => (
            <SavedListTile key={index} list={list} />
          ))
        }
      </ScrollView>
    </>
  )
}

export default SavedLists;