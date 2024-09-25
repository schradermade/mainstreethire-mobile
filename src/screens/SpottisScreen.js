import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import spotti from "../api/spotti";
import SpottiTile from "../components/SpottiTile";

const DiscoverScreen = () => {
  const [term, setTerm] = useState('');
  const [spottis, setSpottis] = useState([]);

  const searchApi = async () => {
    const response = await spotti.get();
    console.log(response.data[0]);
    setSpottis(response.data);
  }

  return (
    <View style={styles.container}>
      <SearchBar
        term={term} 
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={searchApi}  
      />
      <View style={styles.spottisContainer}>
        <FlatList 
          data={spottis}
          keyExtractor={(spotti) => spotti.id.toString()}
          renderItem={({ item }) => {
            return <SpottiTile spotti={item} />;
          }}
          showsVerticalScrollIndicator={false} 
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F3D3E',
    flex: 1,
  },
  spottisContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    flex: 1,

  }
});

export default DiscoverScreen;