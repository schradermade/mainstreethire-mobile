import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapScreen from "../components/Mapbox";

const NavigateScreen = () => {

  return (
    <View style={styles.background}>
      {/* <MapScreen /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#0F3D3E',
    flex: 1,
  }
});

export default NavigateScreen;