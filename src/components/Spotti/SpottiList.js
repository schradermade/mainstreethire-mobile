import React from "react";
import SpottiTile from './SpottiTile';
import { FlatList, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/theme";

const SpottiList = ({ spottis = [] }) => {

  return (
      <FlatList 
        data={spottis}
        keyExtractor={(spotti) => spotti.id.toString()}
        renderItem={({ item }) => {
          return <SpottiTile spotti={item} />;
        }}
        showsVerticalScrollIndicator={true} 
        contentContainerStyle={styles.spottisContainer}
        scrollEnabled={true}
        ListEmptyComponent={<Text style={styles.emptyText}>No Spottis Available</Text>}
      />
  )
}

const styles = StyleSheet.create({
  spottisContainer: {
    paddingBottom: 40,
    backgroundColor: colors.primaryColor,
    alignItems: 'center'
  },
  emptyText: {
    color: colors.darkFont
  }
});

export default SpottiList;