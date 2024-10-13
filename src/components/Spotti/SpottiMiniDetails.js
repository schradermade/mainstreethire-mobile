import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors, iconSize, spacing, fonts } from "../../theme/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const SpottiMiniDetails = ({
  stats,
  iconColor,
  textColorTheme,
  isFullSpottiView,
}) => {
  const { rating, category, bestTimeToVisit } = stats;

  return (
    <View style={styles.statsContainer}>
      {!isFullSpottiView && (
        <>
          <View style={styles.statContainer}>
            <MaterialCommunityIcons
              name="star"
              color={iconColor}
              size={iconSize.xsmall}
              style={{ paddingRight: spacing.xxsmall }}
            />
            <Text
              style={{
                color:
                  textColorTheme === "dark"
                    ? colors.darkFont
                    : colors.offWhiteFont,
                fontFamily: fonts.semiBold,
              }}
            >
              {rating}
            </Text>
          </View>
          <MaterialCommunityIcons
            name="circle-small"
            color={colors.darkFont}
            size={iconSize.xxsmall}
          />
        </>
      )}
      <View style={styles.statContainer}>
        <MaterialCommunityIcons
          name="food"
          color={iconColor}
          size={iconSize.xsmall}
          style={{ paddingRight: spacing.xxsmall }}
        />
        <Text
          style={{
            color:
              textColorTheme === "dark" ? colors.darkFont : colors.offWhiteFont,
            fontFamily: fonts.semiBold,
          }}
        >
          {category}
        </Text>
      </View>
      <MaterialCommunityIcons
        name="circle-small"
        color={iconColor}
        size={iconSize.xxsmall}
      />
      <MaterialCommunityIcons
        name="clock"
        color={iconColor}
        size={iconSize.xxsmall}
        style={{ paddingRight: spacing.xxsmall }}
      />
      <Text
        style={{
          color:
            textColorTheme === "dark" ? colors.darkFont : colors.offWhiteFont,
          fontFamily: fonts.semiBold,
        }}
      >
        {bestTimeToVisit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    marginTop: spacing.xsmall,
    flexDirection: "row",
    alignItems: "center",
  },
  statContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default React.memo(SpottiMiniDetails);
