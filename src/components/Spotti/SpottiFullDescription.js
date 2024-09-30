import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors, fontSize, spacing } from "../../theme/theme";

const SpottiFullDescription = ({description}) => {
  return (
    <View>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: fontSize.medium,
    color: colors.offWhiteFont,
  }
})

export default SpottiFullDescription;