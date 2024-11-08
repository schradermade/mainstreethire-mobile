import React from 'react';
import {
  borderRadius,
  colors,
  fontSize,
  iconSize,
  spacing,
  fonts,
} from '../../../theme/theme';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryTile = ({ title, iconName, isSelected, onPress, styling }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styling,
        isSelected && { borderColor: colors.offWhiteFont, borderWidth: 1.5 },
      ]}
      onPress={onPress}
    >
      <View style={styles.contentContainer}>
        {iconName && (
          <MaterialCommunityIcons
            name={iconName}
            style={styles.icon}
            size={iconSize.small}
          />
        )}
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.borderColorDark,
    borderRadius: borderRadius.medium,
    height: 35,
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.xsmall,
  },
  titleText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.small,
    fontFamily: fonts.regular,
  },
  icon: {
    color: colors.offWhiteFont,
    marginRight: spacing.xsmall,
  },
});

export default CategoryTile;
