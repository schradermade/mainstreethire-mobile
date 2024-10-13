import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { useKeyboardHeight } from "../../hooks/useKeyboardHeight";
import { colors, fontSize, iconSize, spacing, fonts } from "../../theme/theme";
import ScreenWrapper from "../ScreenWrapper";
import TextInputBox from "../../ui/TextInputBox";
import RoundActionButton from "../../ui/RoundActionButton";
import Button from "../../ui/Button";

const UsersNameView = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (key, value) => {
    setName((prev) => ({ ...prev, [key]: value }));
  };

  const screenHeight = Dimensions.get("window").height;
  const keyboardHeight = useKeyboardHeight();
  const calculatedHeight = Math.min(
    screenHeight - keyboardHeight - insets.top - spacing.xxxlarge,
    461 - spacing.xxxlarge
  );

  return (
    <ScreenWrapper
      screenStyles={{
        paddingTop: insets.top,
        paddingHorizontal: spacing.xlarge,
      }}
    >
      <View
        style={[
          {
            height: calculatedHeight,
            justifyContent: "space-between",
          },
        ]}
      >
        <RoundActionButton
          onIconPress={() => navigation.goBack()}
          iconName="arrow-left"
          iconSize={iconSize.medium}
          styling={{ alignItems: "flex-start" }}
        />
        <View style={styles.iconAndTextContainer}>
          <Text style={styles.text}>Enter your name</Text>
        </View>
        <View>
          <TextInputBox
            value={name.firstName}
            onChangeText={(value) => handleChange("firstName", value)}
            alwaysFocused={true}
            returnKey={"return"}
            labelText={"First name"}
            styling={{ paddingHorizontal: spacing.small }}
          />
          <TextInputBox
            value={name.lastName}
            onChangeText={(value) => handleChange("lastName", value)}
            alwaysFocused={true}
            returnKey={"done"}
            labelText={"Last name"}
            styling={{
              paddingHorizontal: spacing.small,
              paddingTop: spacing.xxlarge,
            }}
          />
          <Button
            onPress={() => navigation.navigate("TabsNavigator")}
            buttonText={"Continue"}
            btnStyles={{ marginTop: spacing.xxxxlarge }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  iconAndTextContainer: {
    alignItems: "center",
  },
  text: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xxlarge,
    paddingTop: spacing.medium,
    fontFamily: fonts.regular,
  },
});

export default UsersNameView;
