import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RoundActionButton from "../../../ui/RoundActionButton";
import { colors, iconSize, spacing } from "../../../theme/theme";
import { shareSpottiLink } from "../../../utils/shareSpottiLink";

const SpottiActionButtons = ({ name, id }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <RoundActionButton
        iconName={"chevron-left"}
        iconSize={iconSize.small}
        iconColor={colors.buttonActionIconColor}
        onIconPress={() => navigation.goBack()}
        styling={[styles.actionButton]}
      />
      <View style={styles.rightSideButtons}>
        <RoundActionButton
          iconName={"share-outline"}
          iconSize={iconSize.small}
          iconColor={colors.buttonActionIconColor}
          onIconPress={() => shareSpottiLink(id, name)}
          styling={[styles.actionButton]}
        />
        <RoundActionButton
          iconName={"map-marker-check-outline"}
          iconSize={iconSize.small}
          iconColor={colors.buttonActionIconColor}
          onIconPress={() => navigation.navigate("SpottiScreen")}
          styling={[styles.actionButton, { marginLeft: spacing.large }]}
        />
        <RoundActionButton
          iconName={"bookmark-outline"}
          iconSize={iconSize.small}
          iconColor={colors.buttonActionIconColor}
          onIconPress={() => navigation.navigate("SpottiScreen")}
          styling={[styles.actionButton, { marginLeft: spacing.large }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.small,
  },
  rightSideButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    backgroundColor: colors.buttonActionBackgroundColor,
  },
});

export default SpottiActionButtons;
