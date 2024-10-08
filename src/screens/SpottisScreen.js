import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import spotti from "../api/spotti";
import CategoryList from "../components/Category/CategoryList";
import SpottiList from "../components/Spotti/SpottiList";
import { colors } from "../theme/theme";

const SpottiScreen = () => {
  const [term, setTerm] = useState('');
  const [spottis, setSpottis] = useState([]);

  const spottiApi = async () => {
    const response = await spotti.get();
    setSpottis(response.data);
  }

  return (
    <View style={styles.container}>
      <SearchBar
      term={term} 
      onTermChange={(newTerm) => setTerm(newTerm)}
      onTermSubmit={spottiApi}
      />
      <CategoryList />
      <SpottiList spottis={spottis} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  }
})



export default SpottiScreen;