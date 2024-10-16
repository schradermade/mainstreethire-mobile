import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, spacing, iconSize, fonts, fontSize } from "../../theme/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { ICONS } from "../../constants";
import ExpandingTile from "../ExpandTileGroup/ExpandingTile";

const ExpandedContent = () => {
  return (
    <View style={styles.expandedWrapper}>
      <View style={styles.lineItem}>
        <MaterialIcons
          name={ICONS.userGroup}
          color={colors.darkFont}
          size={iconSize.small}
        />
        <Text style={styles.subText}>alexaaaxo, christianJay12</Text>
      </View>
    </View>
  );
};

const NotExpandedContent = () => {
  return (
    <View style={styles.notExpandedWrapper}>
      <Text style={styles.subTextLabel}>Who</Text>
      <Text style={styles.subText}>alexaaaxo, christianJay12</Text>
    </View>
  );
};

const WhoCard = ({ isExpanded, onExpand }) => {
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
  expandedWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: spacing.xlarge,
  },
  notExpandedWrapper: {
    flexDirection: "row",
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.medium,
    justifyContent: "space-between",
    alignItems: "center",
  },
  lineItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: spacing.medium,
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

export default WhoCard;
