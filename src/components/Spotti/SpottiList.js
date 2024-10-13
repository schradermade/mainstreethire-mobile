import React from "react";
import SpottiTile from "./SpottiTile";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { colors, spacing } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";

const SpottiList = ({ spottis = [] }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={spottis}
      keyExtractor={(spotti) => `${spotti.id}-${spotti.name}`}
      renderItem={({ item }) => {
        return (
          <View style={styles.spottiTile}>
            <SpottiTile
              onPress={() => navigation.navigate("SpottiFullView", { item })}
              name={item.name}
              pictures={item.pictures}
              stats={{
                rating: item.rating,
                category: item.category,
                bestTimeToVisit: item.bestTimeToVisit,
                hoursofOperation: item.hoursofOperation,
              }}
            />
          </View>
        );
      }}
      showsVerticalScrollIndicator={true}
      scrollEnabled={true}
      ListEmptyComponent={
        <Text style={styles.emptyText}>No Spottis Available</Text>
      }
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingTop: spacing.xsmall,
    paddingBottom: spacing.xxxxlarge,
    alignItems: "center",
  },
  spottiTile: {
    marginBottom: spacing.xxxxlarge,
  },
  emptyText: {
    alignSelf: "center",
    color: colors.darkFont,
  },
});

export default React.memo(SpottiList);
