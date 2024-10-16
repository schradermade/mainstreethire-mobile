import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors, iconSize, spacing, fonts } from "../../theme/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ICONS } from "../../constants";

const SpottiQuickFacts = ({
  stats,
  textColorTheme,
  isFullSpottiView,
  directionAlignment,
}) => {
  const { rating, category, bestTimeToVisit } = stats;

  const containerStyle =
    directionAlignment === "horizontal" ? styles.containerHorizontal : {};

  const statStyle =
    directionAlignment === "vertical" ? styles.statVertical : {};

  const colorTheme =
    textColorTheme === "dark" ? colors.darkFont : colors.offWhiteFont;

  return (
    <View style={containerStyle}>
      {!isFullSpottiView && (
        <>
          <View style={[statStyle, styles.stat]}>
            <MaterialCommunityIcons
              name={ICONS.star}
              color={colorTheme}
              style={styles.icon}
            />
            <Text
              style={[
                styles.statText,
                {
                  color: colorTheme,
                },
              ]}
            >
              {rating}
            </Text>
          </View>
          {directionAlignment === "horizontal" && (
            <MaterialCommunityIcons
              name={ICONS.circleSmall}
              color={colorTheme}
              size={iconSize.xxsmall}
            />
          )}
        </>
      )}
      <View style={[statStyle, styles.stat]}>
        <MaterialCommunityIcons
          name={ICONS.food}
          color={colorTheme}
          style={styles.icon}
        />
        <Text
          style={[
            styles.statText,
            {
              color: colorTheme,
            },
          ]}
        >
          {category}
        </Text>
      </View>
      {directionAlignment === "horizontal" && (
        <MaterialCommunityIcons
          name={ICONS.circleSmall}
          color={colorTheme}
          size={iconSize.xxsmall}
        />
      )}
      <View style={[statStyle, styles.stat]}>
        <MaterialCommunityIcons
          name={ICONS.clock}
          color={colorTheme}
          style={styles.icon}
        />
        <Text
          style={[
            styles.statText,
            {
              color: colorTheme,
            },
          ]}
        >
          {bestTimeToVisit}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHorizontal: {
    flex: 1,
    marginTop: spacing.small,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
  },
  statVertical: {
    marginTop: spacing.small,
  },
  icon: {
    paddingRight: spacing.xxsmall,
    fontSize: iconSize.xsmall,
  },
  statText: {
    fontFamily: fonts.regular,
  },
});

export default React.memo(SpottiQuickFacts);
