import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import {
  borderRadius,
  colors,
  fontSize,
  iconSize,
  spacing,
  fonts,
  shadowRadius,
} from "../../theme/theme";
import { ICONS } from "../../constants";

const SavedTripTile = ({ trip }) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        key={trip.title}
        onPress={() => {
          navigation.navigate("SavedTripStack", {
            screen: "SavedTrip",
            params: { trip },
          });
        }}
      >
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../../assets/sunriver.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.cardInfoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{trip.title}</Text>

            <Text style={styles.titleSubText}>0 Spottis</Text>
          </View>
          <View style={styles.lineItemsContainer}>
            <View style={styles.lineItem}>
              <MaterialCommunityIcons
                name={ICONS.travelDates}
                color={colors.darkFont}
                size={iconSize.xsmall}
              />
              <Text style={styles.subText}>Jan 4 - Feb 2, '25</Text>
            </View>
            <View style={styles.lineItem}>
              <MaterialIcons
                name={ICONS.userGroup}
                color={colors.darkFont}
                size={iconSize.xsmall}
              />
              <Text style={styles.subText}>alexaaaxo, christianJay12</Text>
            </View>
            <View style={styles.lineItem}>
              <MaterialCommunityIcons
                name={ICONS.travelLocations}
                color={colors.darkFont}
                size={iconSize.xsmall}
              />
              <Text style={styles.subText}>Germany, Croatia, Italy...</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.medium,
    shadowColor: colors.shadowEffectBlack,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: shadowRadius.large,
  },
  titleContainer: {
    flexDirection: "column",
  },
  cardInfoContainer: {
    paddingLeft: spacing.medium,
  },
  lineItemsContainer: {
    justifyContent: "flex-end",
    marginTop: spacing.xlarge,
  },
  lineItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: spacing.small,
  },
  imageWrapper: {
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: shadowRadius.xsmall,
  },
  image: {
    borderRadius: borderRadius.large,
    width: 150,
    height: 150,
  },
  titleText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.large,
    fontFamily: fonts.regular,
  },
  titleSubText: {
    color: colors.darkFont,
    fontFamily: fonts.semiBold,
    fontSize: fontSize.small,
  },
  subText: {
    color: colors.darkFont,
    fontFamily: fonts.regular,
    paddingLeft: spacing.small,
  },
});

export default SavedTripTile;
