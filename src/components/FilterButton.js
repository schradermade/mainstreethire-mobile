import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ICONS } from "../constants";
import { iconSize, spacing, colors, shadowRadius } from "../theme/theme";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";

const FilterButton = () => {
  const handleFilterPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.filterIconWrapper}
      onPress={handleFilterPress}
    >
      {/* Inner shadow overlay */}
      <View style={styles.innerShadowOverlay} />
      <MaterialCommunityIcons
        name={ICONS.filter}
        size={30}
        color={colors.offWhiteFont}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterIconWrapper: {
    backgroundColor: colors.secondaryColor,
    borderRadius: 50,
    borderWidth: 0.17,
    borderColor: colors.spottiDark,
    marginLeft: spacing.medium,
    paddingHorizontal: spacing.small + 1,
    paddingVertical: spacing.small + 1,
    // shadowColor: colors.spottiDark,
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.1,
    // shadowRadius: shadowRadius.xsmall,
    position: "relative", // Added to allow inner shadow overlay to position correctly
  },
  innerShadowOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 50,
    borderWidth: 0.25,
    borderColor: colors.offWhiteFont, // Darker shadow color for the inner shadow effect
    opacity: 0.35,
  },
});

export default FilterButton;
