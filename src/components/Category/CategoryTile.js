import React from "react";
import { borderRadius, colors, fontSize, spacing } from "../../theme/theme";
import { StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native-gesture-handler";

const CategoryTile = ({ title, iconName, isSelected, onPress }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        isSelected ? { borderColor: colors.offWhiteFont } : {borderColor: colors.borderColorDark}
      ]}
      onPress={onPress}
    >
      {iconName &&
        <MaterialCommunityIcons name={iconName} style={styles.icon} />
      }
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderWidth: 1.5,
    borderRadius: borderRadius.medium,
    marginRight: spacing.medium,
    paddingHorizontal: spacing.medium,
    marginBottom: spacing.large
  },
  titleText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.medium,
  },
  icon: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xxlarge,
    marginRight: spacing.small
  },
})

export default CategoryTile;