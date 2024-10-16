import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";
import { spacing, colors, fonts } from "../../theme/theme";
import SpottiQuickFacts from "./SpottiQuickFacts";
import ImageCarousel from "../ImageCarousel";

const SpottiTile = ({ name, pictures, stats, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}
    >
      <ImageCarousel images={pictures} />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.nameText} numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Text>
          <Text style={styles.subText}>Portland, Oregon</Text>
        </View>
        <SpottiQuickFacts
          stats={stats}
          textColorTheme="dark"
          directionAlignment={"horizontal"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(SpottiTile);

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    width: "100%",
  },
  infoContainer: {
    flex: 1,
    marginTop: spacing.medium,
  },
  nameText: {
    color: colors.offWhiteFont,
    fontSize: 20,
    fontFamily: fonts.semiBold,
    overflow: "hidden",
    flexShrink: 1,
  },
  subText: {
    color: colors.darkFont,
    fontFamily: fonts.regular,
  },
});
