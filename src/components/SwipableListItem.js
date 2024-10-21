import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { colors, fonts } from "../theme/theme"; // Replace with your theme or custom styling

const SwipeableListItem = ({
  renderItem,
  item,
  isDelete,
  isMessage,
  onDelete,
  onMessage,
}) => {
  // Right action that appears when swiped (Delete button)
  const renderRightActions = () => {
    return (
      <>
        {isDelete && (
          <TouchableOpacity
            onPress={() => onDelete(item.id)}
            style={styles.buttonsContainer}
          >
            <View style={styles.deleteButton}>
              <Text style={styles.deleteText}>Delete?</Text>
            </View>
          </TouchableOpacity>
        )}
        {isMessage && (
          <TouchableOpacity
            onPress={() => onMessage()}
            style={styles.buttonsContainer}
          >
            <View style={styles.messageButton}>
              <Text style={styles.messageText}>Message</Text>
            </View>
          </TouchableOpacity>
        )}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Swipeable renderRightActions={renderRightActions}>
        {renderItem(item)}
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.borderColorDark,
    borderBottomWidth: 0.17,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  deleteButton: {
    backgroundColor: "#8B0000",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: "100%",
  },
  deleteText: {
    color: "white",
    fontFamily: fonts.bold,
  },
  messageButton: {
    backgroundColor: "#000080",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: "100%",
  },
  messageText: {
    color: "white",
    fontFamily: fonts.bold,
  },
});

export default SwipeableListItem;
