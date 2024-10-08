import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import TabsNavigator from "./src/navigation/TabsNavigator";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { colors } from './src/theme/theme';

enableScreens();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
          <TabsNavigator />
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
});

export default App;
