import React, { useState } from "react";
import RoundActionButton from "../../ui/RoundActionButton";
import { View, StyleSheet, Text } from "react-native";
import { colors, fontSize, iconSize, spacing, fonts } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import SavedListEditModal from "./SavedListEditModal";

const SavedListActionButtons = ({ listName }) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Left-side buttons */}
      <View style={styles.leftSideButtons}>
        <RoundActionButton
          iconName={"chevron-left"}
          iconSize={iconSize.small}
          iconColor={colors.buttonActionIconColor}
          styling={styles.actionButton}
          onIconPress={() => navigation.goBack()}
        />
      </View>
      {/* Centered title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{listName}</Text>
      </View>
      {/* Right-side buttons */}
      <View style={styles.rightSideButtons}>
        <RoundActionButton
          iconName={"sort"}
          iconSize={iconSize.small}
          iconColor={colors.buttonActionIconColor}
          onIconPress={() => console.log("sort pressed")}
          styling={styles.actionButton}
        />
        <RoundActionButton
          iconName={"dots-horizontal"}
          onIconPress={() => setModalVisible(true)}
          iconColor={colors.buttonActionIconColor}
          iconSize={iconSize.small}
          styling={[styles.actionButton, { marginLeft: spacing.large }]}
        />
      </View>
      <SavedListEditModal
        isVisible={isModalVisible}
        setVisible={setModalVisible}
        title={listName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.small,
    marginTop: spacing.small,
    marginBottom: spacing.medium,
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
  actionButton: {
    backgroundColor: colors.buttonActionBackgroundColor,
  },
});

export default SavedListActionButtons;
