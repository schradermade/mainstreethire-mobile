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

const ActionButton = ({
  buttonText,
  onPress,
  leftIcon,
  rightIcon,
  labelText,
}) => {
  const handleFilterPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    onPress();
  };
  return (
    <>
      <Text style={styles.labelText}>{labelText}</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.touchableContainer]}
        onPress={handleFilterPress}
      >
        <View style={styles.contents}>
          <View style={styles.leftButtonAndLabelContainer}>
            {leftIcon && (
              <MaterialCommunityIcons
                name={leftIcon}
                size={24}
                color={colors.offWhiteFont}
                style={{ marginRight: spacing.xsmall }}
              />
            )}
            <Text style={styles.buttonText}>{buttonText}</Text>
          </View>
          <MaterialCommunityIcons
            name={rightIcon}
            size={36}
            color={colors.spottiDark}
            style={{ marginLeft: spacing.xsmall }}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    backgroundColor: colors.primaryColor,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: colors.white,
  },
  contents: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButtonAndLabelContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: fontSize.large,
    color: colors.offWhiteFont,
    fontFamily: fonts.bold,
  },
  labelText: {
    fontFamily: fonts.regular,
    color: colors.darkFont,
    marginLeft: 20,
    marginBottom: spacing.xsmall,
  },
});

export default ActionButton;
