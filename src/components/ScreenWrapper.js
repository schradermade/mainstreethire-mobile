import React from "react";
import { View, StyleSheet } from "react-native";
import { spacing, colors } from "../theme/theme";

const ScreenWrapper = ({ children }) => {
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.xxlarge,
    backgroundColor: colors.primaryColor
  }
})

export default ScreenWrapper;