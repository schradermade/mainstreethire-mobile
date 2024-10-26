import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  colors,
  spacing,
  fontSize,
  borderRadius,
  fonts,
} from '../../theme/theme';

const TagTile = ({ tag }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tagText}>{tag}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.borderColorDark,
    borderWidth: 1,
    borderRadius: borderRadius.small,
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
    color: colors.darkFont,
    fontSize: fontSize.small,
    fontFamily: fonts.semiBold,
  },
});

export default TagTile;
