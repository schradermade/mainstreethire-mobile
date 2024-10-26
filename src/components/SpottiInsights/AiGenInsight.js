import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  borderRadius,
  colors,
  fonts,
  fontSize,
  spacing,
} from '../../theme/theme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ICONS } from '../../constants';

const AiGenInsight = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Spotters say</Text>
        <MaterialCommunityIcons
          name={ICONS.chatBubble}
          size={20}
          color={colors.offWhiteFont}
          style={{ marginLeft: spacing.xsmall, marginTop: -3 }}
        />
      </View>
      <Text style={[styles.text, { marginTop: spacing.small }]}>
        Spotters love the iconic views and experiences at the Eiffel Tower. They
        mention that going early helps avoid crowds, and booking tickets online
        speeds up entry. Some recommend taking the stairs for a unique, less
        crowded experience. Many highlight the magical nightly light show and
        suggest relaxing with a picnic at Champ de Mars or enjoying a nearby
        Seine River cruise for a scenic view. Overall, it’s an unforgettable way
        to experience Paris.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: colors.spottiDark,
    borderRadius: borderRadius.xlarge,
    padding: spacing.medium,
    backgroundColor: colors.primaryLightColor,
    marginBottom: spacing.large,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  headerText: {
    fontSize: fontSize.large,
    fontFamily: fonts.insightsMedium,
    color: colors.offWhiteFont,
  },
  text: {
    fontSize: fontSize.medium,
    color: colors.offWhiteFont,
    fontFamily: fonts.insightsMedium,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
});

export default AiGenInsight;
