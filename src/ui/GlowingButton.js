import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ICONS } from '../constants';
import {
  iconSize,
  spacing,
  colors,
  shadowRadius,
  fontSize,
  fonts,
} from '../theme/theme';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';

const GlowingButton = ({ buttonText, onPress, icon }) => {
  const handleFilterPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress();
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.filterIconWrapper]}
      onPress={handleFilterPress}
    >
      {/* Inner shadow overlay */}
      <View style={styles.innerShadowOverlay} />
      <View style={styles.discussionBtnContainer}>
        <Text style={styles.discussionBtnText}>{buttonText}</Text>
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.offWhiteFont}
          style={{ marginLeft: spacing.xsmall }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterIconWrapper: {
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    alignSelf: 'center',
    backgroundColor: '#0a0a0a',
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: colors.offWhiteFont,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: shadowRadius.xsmall,
  },
  innerShadowOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'red', // Darker shadow color for the inner shadow effect
    opacity: 0.15,
  },
  discussionBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discussionBtnText: {
    fontSize: fontSize.large,
    color: colors.offWhiteFont,
    fontFamily: fonts.bold,
  },
});

export default GlowingButton;
