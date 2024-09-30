import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import TabsNavigator from "./src/navigation/TabsNavigator";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <TabsNavigator />
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F3D3E', // Set your global background color here
  },
});

export default App;
