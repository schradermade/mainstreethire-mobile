import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, fontSize, fonts } from "../theme/theme";

const Button = ({ onPress, buttonText, btnStyles }) => {
  return (
    <View style={[styles.container, btnStyles]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.offWhiteFont,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: fontSize.large,
    color: colors.darkGray,
    fontFamily: fonts.semiBold,
  },
});

export default Button;
