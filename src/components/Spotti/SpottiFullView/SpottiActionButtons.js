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
        iconColor={colors.mediumGray}
        onIconPress={() => navigation.goBack()}
        styling={{ backgroundColor: colors.offWhiteFont }}
      />
      <View style={styles.rightSideButtons}>
        <RoundActionButton
          iconName={"share-outline"}
          iconSize={iconSize.small}
          iconColor={colors.mediumGray}
          onIconPress={() => shareSpottiLink(id, name)}
          styling={{ backgroundColor: colors.offWhiteFont }}
        />
        <RoundActionButton
          iconName={"map-marker-check-outline"}
          iconSize={iconSize.small}
          iconColor={colors.mediumGray}
          onIconPress={() => navigation.navigate("SpottiScreen")}
          styling={styles.actionButton}
        />
        <RoundActionButton
          iconName={"bookmark-outline"}
          iconSize={iconSize.small}
          iconColor={colors.mediumGray}
          onIconPress={() => navigation.navigate("SpottiScreen")}
          styling={styles.actionButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.xlarge,
  },
  rightSideButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    marginLeft: spacing.large,
    backgroundColor: colors.offWhiteFont,
  },
});

export default SpottiActionButtons;
