import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, spacing, iconSize, fonts, fontSize } from "../../theme/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ICONS } from "../../constants";
import DatePicker from "../DatePicker";
import ExpandingTile from "../ExpandTileGroup/ExpandingTile";

const ExpandedContent = () => {
  return (
    <View style={styles.expandedWrapper}>
      <View style={styles.lineItem}>
        <MaterialCommunityIcons
          name={ICONS.travelDates}
          color={colors.darkFont}
          size={iconSize.small}
        />
        <DatePicker />
      </View>
    </View>
  );
};

const NotExpandedContent = () => {
  return (
    <View style={styles.notExpandedWrapper}>
      <Text style={styles.subTextLabel}>When</Text>
      <Text style={styles.subText}>Jan 4 - Feb 2, '25</Text>
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
  expandedWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: spacing.xlarge,
  },
  notExpandedWrapper: {
    flexDirection: "row",
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.large,
    justifyContent: "space-between",
    alignItems: "center",
  },
  lineItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: spacing.medium,
  },
  subText: {
    color: "#E0E0E0",
    fontFamily: fonts.regular,
    fontSize: fontSize.large,
    paddingLeft: spacing.small,
  },
  subTextLabel: {
    color: "#E0E0E0",
    fontFamily: fonts.semiBold,
    fontSize: fontSize.large,
    paddingLeft: spacing.small,
  },
});

export default WhenCard;
