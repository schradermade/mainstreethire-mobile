import React, { useState, useEffect, useRef } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import {
  colors,
  spacing,
  fontSize,
  borderWidth,
  borderRadius,
  fonts,
} from "../theme/theme";
import CancelButton from "./CancelButton";
import { textInputThemes } from "../theme/themeManager";

const TextInputBox = ({
  value,
  onChangeText,
  placeholder,
  returnKey,
  alwaysFocused = false,
  labelText,
  styling,
  isPassword = false,
  colorTheme = "light",
}) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(alwaysFocused);

  const theme = textInputThemes[colorTheme];

  useEffect(() => {
    if (alwaysFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <View style={styling}>
      {labelText && (
        <Text style={[styles.label, { color: theme.labelColor }]}>
          {labelText}
        </Text>
      )}
      <TextInput
        ref={inputRef}
        secureTextEntry={isPassword}
        style={[
          styles.inputText,
          {
            color: theme.inputTextColor,
            backgroundColor: theme.inputBackgroundColor,
          },
          isFocused && styles.focusedInput,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholderText}
        returnKeyType={returnKey}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(alwaysFocused)}
      />
      {value.length >= 1 && (
        <View style={styles.closeButtonWrapper}>
          <CancelButton onPress={() => onChangeText("")} hasBorder />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  closeButtonWrapper: {
    position: "absolute",
    bottom: 12,
    right: 18,
  },
  inputText: {
    paddingHorizontal: spacing.xlarge,
    paddingRight: 45,
    borderRadius: borderRadius.xxlarge,
    fontSize: fontSize.large,
    height: 50,
  },
  focusedInput: {
    borderColor: colors.borderColorLight,
    borderWidth: borderWidth.medium,
  },
  label: {
    // marginLeft: spacing.large,
    marginBottom: spacing.xsmall,
    fontSize: fontSize.medium,
    fontFamily: fonts.regular,
  },
});

export default TextInputBox;
