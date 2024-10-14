import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { colors, borderRadius, iconSize, shadowRadius } from "../theme/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const RoundActionButton = ({
  onIconPress,
  iconName,
  iconColor,
  iconSize,
  styling,
}) => {
  return (
    <TouchableOpacity onPress={onIconPress} activeOpacity={0.75}>
      <View style={[styles.iconWrapper, styling]}>
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={iconColor || "white"}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    padding: 3,
    borderRadius: iconSize.large / 2,
    borderWidth: 0.25,
    borderColor: colors.buttonActionIconColor,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.shadowEffectBlack,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: shadowRadius.xsmall,
  },
});

export default RoundActionButton;
