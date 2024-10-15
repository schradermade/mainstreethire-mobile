import React from "react";
import { StyleSheet, View, TouchableOpacity, Animated } from "react-native";
import { colors, spacing, borderRadius, shadowRadius } from "../../theme/theme";
import CancelButton from "../../ui/CancelButton";

const ExpandingTile = ({
  ExpandedContent,
  NotExpandedContent,
  isExpanded, // Receive the expanded state from parent
  onExpand, // Handle expansion from parent
}) => {
  return (
    <View style={styles.container}>
      {!isExpanded ? (
        <TouchableOpacity
          style={styles.notExpandedContainer}
          onPress={onExpand}
          activeOpacity={1}
        >
          <NotExpandedContent />
        </TouchableOpacity>
      ) : (
        <Animated.View style={[styles.expandedContainer]}>
          <View style={styles.closeButtonWrapper}>
            <CancelButton onPress={onExpand} />
          </View>
          <ExpandedContent />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLightColor,
    borderRadius: borderRadius.xlarge,
    borderColor: colors.mediumGray,
    borderWidth: 0.17,
    marginVertical: spacing.small,
    shadowColor: colors.shadowEffectBlack,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: shadowRadius.xsmall,
  },
  expandedContainer: {
    paddingHorizontal: spacing.large,
    overflow: "hidden",
    height: "78%",
  },
  notExpandedContainer: {},
  closeButtonWrapper: {
    position: "absolute",
    top: spacing.medium,
    right: spacing.medium,
    zIndex: 1,
  },
});

export default ExpandingTile;
