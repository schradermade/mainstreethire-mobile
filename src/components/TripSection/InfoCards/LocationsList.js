import React, { useState, useEffect } from "react";
import { View, FlatList, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { colors, fonts, fontSize, spacing } from "../../../theme/theme";

const LocationsList = ({ list }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(list);
  }, [list]);

  const renderLocationItem = ({ item }) => (
    <View style={styles.locationItem}>
      <Text style={styles.locationText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        {locations.map((location, index) => (
          <View key={location.id} style={styles.locationItem}>
            <Text style={styles.locationText}>{location.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: fontSize.xlarge,
    fontFamily: fonts.semiBold,
    color: colors.darkFont,
  },
  locationItem: {
    paddingVertical: spacing.small,
  },
  locationText: {
    fontSize: fontSize.large,
    color: colors.darkFont,
    fontFamily: fonts.regular,
  },
});

export default LocationsList;
