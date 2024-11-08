import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors, fonts, fontSize, spacing } from '../../../theme/theme';
import SwipeableListItem from '../../SwipableListItem';

const LocationsList = ({ listOfLocations }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(listOfLocations);
  }, [listOfLocations]);

  const handleDelete = (id) => {
    console.log('deleted');
  };

  const LocationItem = (item) => {
    return (
      <View key={item.id} style={styles.swipeableContents}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      {locations.map((location) => (
        <SwipeableListItem
          key={location.id}
          renderItem={() => LocationItem(location)}
          location={location}
          isDelete
          onDelete={handleDelete}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  swipeableContents: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.large,
  },
  itemText: {
    fontSize: fontSize.large,
    color: colors.offWhiteFont,
    fontFamily: fonts.semiBold,
    marginLeft: spacing.small,
  },
  userComponentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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

export default LocationsList;
