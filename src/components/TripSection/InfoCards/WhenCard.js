import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  colors,
  spacing,
  iconSize,
  fonts,
  fontSize,
} from "../../../theme/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ICONS } from "../../../constants";
import DatePicker from "../../DatePicker";
import ExpandingTile from "../../ExpandTileGroup/ExpandingTile";

const ExpandedContent = () => {
  return (
    <View style={styles.expandedContainer}>
      <Text style={styles.sectionLabel}>When you going?</Text>
      {/* <DatePicker /> */}
    </View>
  );
};

const NotExpandedContent = () => {
  return (
    <View style={styles.notExpandedWrapper}>
      <Text style={styles.sectionLabel}>When</Text>
      <Text style={styles.notExpandedText}>Jan 4 - Feb 2, '25</Text>
    </View>
  );
};

const WhenCard = ({ isExpanded, onExpand }) => {
  return (
    <ExpandingTile
      ExpandedContent={ExpandedContent}
      NotExpandedContent={NotExpandedContent}
      isExpanded={isExpanded} // Pass the expanded state
      onExpand={onExpand} // Handle card expansion
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
  expandedLabel: {
    color: "#E0E0E0",
    fontSize: fontSize.xlarge,
    fontFamily: fonts.regular,
  },
});

export default WhenCard;
