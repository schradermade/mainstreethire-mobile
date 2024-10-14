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

const TextInputBox = ({
  value,
  onChangeText,
  placeholder,
  returnKey,
  alwaysFocused = false,
  labelText,
  styling,
  isPassword = false,
}) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(alwaysFocused);

  useEffect(() => {
    if (alwaysFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <View style={styling}>
      <Text style={styles.label}>{labelText}</Text>
      <TextInput
        ref={inputRef}
        secureTextEntry={isPassword}
        style={[styles.inputText, isFocused && styles.focusedInput]}
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
          <CancelButton onPress={() => onChangeText("")} />
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
    borderRadius: borderRadius.large,
    color: colors.offWhiteFont,
    fontSize: fontSize.large,
    backgroundColor: colors.secondaryColor,
    height: 50,
  },
  focusedInput: {
    borderColor: colors.borderColorLight,
    borderWidth: borderWidth.medium,
  },
  label: {
    color: colors.offWhiteFont,
    marginLeft: 1,
    marginBottom: 5,
    fontSize: fontSize.medium,
    fontFamily: fonts.regular,
  },
});

export default TextInputBox;
