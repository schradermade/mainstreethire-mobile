import React from "react";
import { StyleSheet } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import SavedSection from "../components/Saved";

const SavedScreen = () => {

  return (
    <ScreenWrapper style={styles.container}>
      <SavedSection />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SavedScreen;