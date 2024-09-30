import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const CommunityScreen = () => {

  return (
    <View style={styles.background}>
      <Text>Profile Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#0F3D3E',
    flex: 1,
  }
});

export default CommunityScreen;