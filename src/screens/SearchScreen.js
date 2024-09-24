import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import SearchBar from "./SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View style={styles.background}>
      <SearchBar 
        term={term} 
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('term submitted')}  
      />
      <Text>{term}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#0F3D3E',
    flex: 1,
  }
});

export default SearchScreen;