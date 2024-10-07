import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../theme/theme";

const ScreenWrapper = ({ children, style }) => {
  return (
    <View style={[styles.wrapper, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primaryTest
  }
})

export default ScreenWrapper;