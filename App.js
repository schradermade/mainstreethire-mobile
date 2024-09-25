import { createAppContainer } from 'react-navigation';
import { SafeAreaView, StyleSheet } from "react-native";
import TabNavigator from './src/navigation/TabNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  )
}

const AppNavigator = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F3D3E', // Set your global background color here
  },
});

export default App;