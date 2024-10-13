import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../theme/theme";

const ScreenWrapper = ({ children, screenStyles }) => {
  return <View style={[styles.wrapper, screenStyles]}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
});

export default ScreenWrapper;
