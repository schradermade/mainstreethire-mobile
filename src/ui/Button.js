import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fontSize, fonts, shadowRadius } from '../theme/theme';

const Button = ({ onPress, buttonText, btnStyles }) => {
  return (
    <View style={[styles.container, btnStyles]}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.offWhiteFont,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.buttonActionIconColor,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: shadowRadius.xsmall,
  },
  buttonText: {
    fontSize: fontSize.large,
    color: colors.darkGray,
    fontFamily: fonts.semiBold,
  },
});

export default Button;
