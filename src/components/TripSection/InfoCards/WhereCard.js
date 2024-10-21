import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, spacing, fonts, fontSize } from "../../../theme/theme";
import ExpandingTile from "../../ExpandTileGroup/ExpandingTile";
import TextInputBox from "../../../ui/TextInputBox";
import LocationsList from "./LocationsList";
import { DEV_LOCATIONS } from "../../../constants";

const ExpandedContent = () => {
  const [location, setLocation] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.expandedContainer}>
      <Text style={styles.sectionLabel}>Where to?</Text>
      <Text style={styles.subHeaderText}>
        Saved locations populate relevant Spottis.
      </Text>

      <View style={styles.inputBoxWrapper}>
        <TextInputBox
          value={location}
          onChangeText={setLocation}
          placeholder={"Search location"}
          placeholderTextColor={colors.placeholderText}
          returnKeyType="done"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          colorTheme="dark"
        />
        <Text style={styles.savedLocationsText}>Saved to this trip</Text>
      </View>
      <LocationsList listOfLocations={DEV_LOCATIONS} />
    </View>
  );
};

const NotExpandedContent = () => {
  return (
    <View style={styles.notExpandedWrapper}>
      <Text style={styles.sectionLabel}>Where</Text>
      <Text style={styles.notExpandedText}>Germany, Croatia, Italy...</Text>
    </View>
  );
};

const WhereCard = ({ isExpanded, onExpand }) => {
  return (
    <ExpandingTile
      ExpandedContent={ExpandedContent}
      NotExpandedContent={NotExpandedContent}
      isExpanded={isExpanded}
      onExpand={onExpand}
    />
  );
};

const styles = StyleSheet.create({
  notExpandedWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionLabel: {
    color: "#E0E0E0",
    fontSize: fontSize.xlarge,
    fontFamily: fonts.regular,
  },
  notExpandedText: {
    color: "#E0E0E0",
    fontFamily: fonts.regular,
    fontSize: fontSize.large,
  },
  expandedContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  inputBoxWrapper: {
    marginTop: spacing.medium,
    borderBottomColor: colors.borderColorDark,
    borderBottomWidth: 0.17,
  },
  subHeaderText: {
    alignSelf: "center",
    marginTop: spacing.medium,
    fontSize: fontSize.medium,
    fontFamily: fonts.regular,
    color: colors.offWhiteFont,
  },
  savedLocationsText: {
    fontSize: fontSize.small,
    color: colors.darkFont,
    fontFamily: fonts.regular,
    alignSelf: "center",
    paddingTop: spacing.medium,
    paddingBottom: spacing.xsmall,
  },
});

export default WhereCard;
