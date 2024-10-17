import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  colors,
  spacing,
  iconSize,
  fonts,
  fontSize,
} from "../../../theme/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ICONS } from "../../../constants";
import ExpandingTile from "../../ExpandTileGroup/ExpandingTile";
import TextInputBox from "../../../ui/TextInputBox";
import LocationsList from "./LocationsList";
import { DEV_LOCATIONS } from "../../../constants";

const ExpandedContent = () => {
  const [location, setLocation] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.ExpandedContainer}>
      <View style={styles.inputBoxWrapper}>
        <TextInputBox
          value={location}
          onChangeText={setLocation}
          placeholder={"Enter location"}
          placeholderTextColor={colors.placeholderText}
          returnKeyType="done"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          labelText={"Add locations"}
          colorTheme="dark"
        />
      </View>
      <LocationsList list={DEV_LOCATIONS} />
    </View>
  );
};

const NotExpandedContent = () => {
  return (
    <View style={styles.notExpandedWrapper}>
      <Text style={styles.subTextLabel}>Where</Text>
      <Text style={styles.subText}>Germany, Croatia, Italy...</Text>
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
  ExpandedContainer: {
    // height: "100%",
    // flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: spacing.xlarge,
  },
  notExpandedWrapper: {
    // height: "100%",
    flexDirection: "row",
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.medium,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputBoxWrapper: {
    marginTop: spacing.xxxxlarge,
  },
  subTextLabel: {
    color: "#E0E0E0",
    fontFamily: fonts.semiBold,
    fontSize: fontSize.large,
    paddingLeft: spacing.small,
  },
  subText: {
    color: "#E0E0E0",
    fontFamily: fonts.regular,
    fontSize: fontSize.medium,
    paddingLeft: spacing.small,
  },
});

export default WhereCard;
