import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors, spacing, fontSize } from "../../theme/theme";

const TagTile = ({ tag }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tagText}>{tag}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.borderColorLight,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    paddingVertical: spacing.xsmall,
    paddingHorizontal: spacing.small,
    marginRight: spacing.small,
    marginBottom: spacing.small,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.small,
  }
})

export default TagTile;