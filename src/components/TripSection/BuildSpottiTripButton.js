import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  colors,
  fontSize,
  iconSize,
  spacing,
  fonts,
  shadowRadius,
} from '../../theme/theme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CustomBorder from '../../ui/CustomBorder';
import * as Haptics from 'expo-haptics';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ICONS } from '../../constants';

const BuildSpottiTripButton = () => {
  const triggerHapticFeedback = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };
  return (
    <>
      <CustomBorder borderSize={1} borderColor={colors.borderColorDark} />
      <TouchableOpacity
        style={styles.container}
        onPress={triggerHapticFeedback}
      >
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={ICONS.buildTrip} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Build Spotti Trip</Text>
        </View>
      </TouchableOpacity>
      <CustomBorder
        borderSize={0.25}
        borderColor={colors.borderColorDark}
        marginHoriz={spacing.medium}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.small,
  },
  titleText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.large,
    fontFamily: fonts.semiBold,
  },
  textContainer: {
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.medium,
    padding: spacing.small,
    backgroundColor: colors.offWhiteFont,
    borderRadius: 25,
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: shadowRadius.xsmall,
  },
  icon: {
    color: colors.darkGray,
    fontSize: iconSize.small,
  },
});

export default BuildSpottiTripButton;
