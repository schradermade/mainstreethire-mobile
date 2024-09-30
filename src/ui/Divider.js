import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { colors } from "../theme/theme";

const Divider = () => {
  const screenWidth = Dimensions.get('window').width; // Get screen width

  return <View style={[styles.divider, { width: screenWidth }]} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.borderColorDark || 'black',
  },
});

export default Divider;
