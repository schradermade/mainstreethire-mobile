import React from "react";
import SpottiTile from './SpottiTile';
import { FlatList, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/theme";
import { useNavigation } from '@react-navigation/native';

const SpottiList = ({ spottis = [] }) => {
  const navigation = useNavigation();
  
  return (
      <FlatList
        data={spottis}
        keyExtractor={(spotti) => `${spotti.id}-${spotti.name}`}
        renderItem={({ item }) => {
          return (
            <SpottiTile
              onPress={() => navigation.navigate('SpottiFullView', { item })}
              name={item.name}
              pictures={item.pictures}
              stats={{
                rating: item.rating,
                category: item.category,
                bestTimeToVisit: item.bestTimeToVisit,
                hoursofOperation: item.hoursofOperation
              }}
            />
          )
        }}
        showsVerticalScrollIndicator={true} 
        scrollEnabled={true}
        ListEmptyComponent={<Text style={styles.emptyText}>No Spottis Available</Text>}
      />
  )
}

const styles = StyleSheet.create({
  emptyText: {
    color: colors.darkFont
  }
});

export default React.memo(SpottiList);
