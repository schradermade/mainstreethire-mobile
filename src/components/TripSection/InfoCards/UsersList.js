import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { colors, fonts, fontSize, spacing } from "../../../theme/theme";
import SwipeableListItem from "../../SwipableListItem";
import { Avatar } from "react-native-elements";

const UsersList = ({ list }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(list);
  }, [list]);

  const handleDelete = (id) => {
    console.log("deleted");
  };

  const UserItem = (item) => {
    return (
      <View key={item.id} style={styles.swipeableContents}>
        <Avatar
          rounded
          size="medium"
          source={require("../../../../assets/christian-headshot.png")}
          title={"test-title"} // If the image doesn't load, initials will be displayed
          containerStyle={{ backgroundColor: "#ccc" }} // Placeholder color
        />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      {locations.map((user) => (
        <SwipeableListItem
          key={user.id}
          renderItem={UserItem}
          item={user}
          isDelete
          onDelete={handleDelete}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  swipeableContents: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing.medium,
  },
  itemText: {
    fontSize: fontSize.large,
    color: colors.offWhiteFont,
    fontFamily: fonts.semiBold,
    marginLeft: spacing.small,
  },
  userComponentContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.medium,
  },
  locationItem: {
    paddingVertical: spacing.small,
  },
  locationText: {
    fontSize: fontSize.large,
    fontFamily: fonts.semiBold,
    color: colors.offWhiteFont,
    paddingLeft: spacing.small,
  },
});

export default UsersList;
