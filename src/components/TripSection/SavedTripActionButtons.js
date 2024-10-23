import React, { useState } from "react";
import RoundActionButton from "../../ui/RoundActionButton";
import { View, StyleSheet, Text } from "react-native";
import { colors, fontSize, iconSize, spacing, fonts } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { ICONS } from "../../constants";
import EditModalContents from "./EditModalContents";
import SlideUpModal from "../SlideUpModal";

const SavedTripActionButtons = ({ tripName }) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Left-side buttons */}
      <View style={styles.leftSideButtons}>
        <RoundActionButton
          iconName={ICONS.arrowLeft}
          iconSize={iconSize.medium}
          iconColor={colors.offWhiteFont}
          styling={styles.actionButton}
          onIconPress={() => navigation.goBack()}
        />
      </View>
      {/* Centered title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{tripName}</Text>
      </View>
      {/* Right-side buttons */}
      <View style={styles.rightSideButtons}>
        <RoundActionButton
          iconName={ICONS.sort}
          iconSize={iconSize.medium}
          iconColor={colors.offWhiteFont}
          onIconPress={() => console.log("sort pressed")}
          styling={styles.actionButton}
        />
        <RoundActionButton
          iconName={ICONS.dots}
          onIconPress={() => setModalVisible(true)}
          iconColor={colors.offWhiteFont}
          iconSize={iconSize.medium}
          styling={{ marginLeft: spacing.large }}
        />
      </View>
      <SlideUpModal isVisible={isModalVisible} setVisible={setModalVisible}>
        <EditModalContents tripName={tripName} />
      </SlideUpModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.xlarge,
    alignItems: "center",
  },
  leftSideButtons: {
    zIndex: 2,
  },
  rightSideButtons: {
    flexDirection: "row",
    zIndex: 2,
  },
  titleContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  titleText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xlarge,
    fontFamily: fonts.semiBold,
  },
});

export default SavedTripActionButtons;
