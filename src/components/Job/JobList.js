import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { colors, spacing } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';

const JobList = ({ spottis = [], TileComponent }) => {
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
      keyExtractor={() => uuidv4()}
      renderItem={({ item }) => {
        return (
          <View style={styles.spottiTile}>
            <TileComponent // SpottiTile or SpottiMiniTile
              onPress={() => handleTilePress(item)}
              name={item.name}
              images={item.images}
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
    paddingTop: spacing.xxlarge,
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

export default React.memo(JobList);
