import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../theme/theme";

const Divider = () => {

  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: .5,
    backgroundColor: colors.borderColorDark || 'black',
  },
});

export default Divider;
