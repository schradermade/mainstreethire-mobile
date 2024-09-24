import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import { SafeAreaView, StyleSheet } from "react-native";

const navigator = createStackNavigator({
  Search: SearchScreen,
}, 
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    headerShown: false
  }
}
)

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  )
}

const AppNavigator = createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set your global background color here
  },
});

export default App;