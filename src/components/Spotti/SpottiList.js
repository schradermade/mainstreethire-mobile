import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { colors, spacing } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';

const SpottiList = ({ spottis = [], TileComponent }) => {
  const navigation = useNavigation();

  const handleTilePress = (spotti) => {
    // Navigate to the SpottiFullStack and pass the clicked spotti item
    navigation.navigate('SpottiFullStack', {
      screen: 'SpottiFullView',
      params: { item: spotti },
    });
  };

  return (
    <FlatList
      data={spottis}
      keyExtractor={(spotti) => `${spotti.id}-${spotti.name}`}
      renderItem={({ item }) => {
        return (
          <View style={styles.spottiTile}>
            <TileComponent // SpottiTile or SpottiMiniTile
              onPress={() => handleTilePress(item)}
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
    alignItems: 'center',
  },
  spottiTile: {
    width: '100%',
    marginBottom: spacing.xxxxlarge,
  },
  emptyText: {
    alignSelf: 'center',
    color: colors.darkFont,
  },
});

export default React.memo(SpottiList);
