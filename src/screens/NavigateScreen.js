import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const NavigateScreen = () => {

  return (
    <View style={styles.background}>
      <Text>Navigate Screen</Text>
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