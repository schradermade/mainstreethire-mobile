import { Text, StyleSheet } from "react-native";
import { colors, fontSize, spacing, iconSize, fonts } from "../theme/theme";
import { HOTSPOTTI_NAME, HOTSPOTTI_SLOGAN } from "../constants";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BOTTOM_TAB_ICONS } from "../constants";

export const HotSpottiIconAndSlogan = ({ showSlogan }) => {
  const innerIcon = () => (
    <MaterialCommunityIcons
      name={BOTTOM_TAB_ICONS["Spottis"].name}
      style={styles.innerIcon}
      size={iconSize.large}
    />
  );

  return (
    <>
      <Text style={styles.iconText}>
        {HOTSPOTTI_NAME[0]}
        {innerIcon()}
        {HOTSPOTTI_NAME[1]}
      </Text>
      {showSlogan && <Text style={styles.iconSubText}>{HOTSPOTTI_SLOGAN}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  iconText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xxxlarge,
    textAlign: "center",
    fontFamily: fonts.bold,
  },
  iconSubText: {
    fontSize: fontSize.large,
    color: colors.darkFont,
    marginTop: spacing.small,
    fontFamily: fonts.bold,
  },
  innerIcon: {
    color: colors.spottiDark,
  },
});
