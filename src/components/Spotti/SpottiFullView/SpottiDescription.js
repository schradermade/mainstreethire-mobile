import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors, fontSize, fonts } from '../../../theme/theme';

const SpottiDescriptionSection = ({ description }) => {
  return <Text style={styles.descriptionText}>{description}</Text>;
};

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: fontSize.medium,
    color: colors.offWhiteFont,
    fontFamily: fonts.regular,
  },
});

export default SpottiDescriptionSection;
