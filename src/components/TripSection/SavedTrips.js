import React from "react";
import SavedTripTile from "./SavedTripTile";
import { SAVED_TRIPS } from "../../constants";
import BuildSpottiTripButton from "./BuildSpottiTripButton";
import { ScrollView, StyleSheet } from "react-native";
import { spacing } from "../../theme/theme";

const SavedTrips = () => {
  return (
    <>
      <BuildSpottiTripButton />
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.scrollViewContent}
      >
        {SAVED_TRIPS.map((trip, index) => (
          <SavedTripTile key={index} trip={trip} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingTop: spacing.small,
    paddingBottom: 150,
  },
});

export default SavedTrips;
