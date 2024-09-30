import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageCarousel from "../components/ImageCarousel";

const SavedScreen = () => {

  return (
    <View style={styles.touchableArea}>
      <ImageCarousel images={[require('../../assets/sunriver.jpg'), require('../../assets/sunriver2.jpg')]} />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#0F3D3E',
    flex: 1,
  }
});

export default SavedScreen;