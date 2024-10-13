import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors, fontSize } from "../../../theme/theme";

const SpottiDescriptionSection = ({ description }) => {
  return <Text style={styles.descriptionText}>{description}</Text>;
};

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: fontSize.medium,
    color: colors.offWhiteFont,
  },
});

export default SpottiDescriptionSection;
