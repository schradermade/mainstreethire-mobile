import React from "react";
import SpottiTile from './SpottiTile';
import { FlatList, StyleSheet } from "react-native";
import { colors, spacing } from "../../theme/theme";

const SpottiList = ({ spottis }) => {

  return (
      <FlatList 
        data={spottis}
        keyExtractor={(spotti) => spotti.id.toString()}
        renderItem={({ item }) => {
          return <SpottiTile spotti={item} />;
        }}
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.spottisContainer}
      />
  )
}

const styles = StyleSheet.create({
  spottisContainer: {
    paddingBottom: 225,
    backgroundColor: colors.primaryColor,
    marginHorizontal: spacing.xxlarge,

  }
});

export default SpottiList;