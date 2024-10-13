import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, fontSize, spacing } from "../../../theme/theme";

const windowWidth = Dimensions.get("window").width - 48;

const SpottiRatingSection = ({ rating }) => {
  return (
    // 100%
    <View style={styles.container}>
      {/* 30% */}
      <View style={styles.ratingContainer}>
        <View style={styles.ratingTextContainer}>
          <Text style={styles.ratingText}>
            {/* {rating} */}
            4.8
          </Text>
        </View>
        {/* 70% */}
        <View style={styles.starsContainer}>
          <View>
            <MaterialCommunityIcons
              name="star"
              style={styles.starIcon}
              color={colors.spottiDark}
            />
          </View>
          <View>
            <MaterialCommunityIcons
              name="star"
              style={styles.starIcon}
              color={colors.spottiDark}
            />
          </View>
          <View>
            <MaterialCommunityIcons
              name="star"
              style={styles.starIcon}
              color={colors.spottiDark}
            />
          </View>
          <View>
            <MaterialCommunityIcons
              name="star"
              style={styles.starIcon}
              color={colors.spottiDark}
            />
          </View>
          <View>
            <MaterialCommunityIcons
              name="star"
              style={styles.starIcon}
              color={colors.spottiDark}
            />
          </View>
        </View>
      </View>
      <View style={styles.subTextWrapper}>
        <Text style={styles.subText}>2,534 reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: windowWidth,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingTextContainer: {
    width: "26%",
  },
  ratingText: {
    color: colors.offWhiteFont,
    fontSize: windowWidth * 0.17,
    width: "100%",
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "74%",
  },
  starIcon: {
    fontSize: (windowWidth * 0.74) / 5,
  },
  subText: {
    color: colors.darkFont,
  },
  subTextWrapper: {
    alignItems: "flex-end",
    marginRight: spacing.medium,
  },
});

export default SpottiRatingSection;
