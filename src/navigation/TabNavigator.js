import { createBottomTabNavigator } from "react-navigation-tabs";
import SpottisScreen from "../screens/SpottisScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SavedScreen from "../screens/SavedScreen";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import NavigateScreen from "../screens/NavigateScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Spottis: {
      screen: SpottisScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="map-marker-radius" size={24} color={focused ? '#f3f4f2' : '#8D9383'} />
        ),
      },
    },
    Navigate: {
      screen: NavigateScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="map-search" size={24} color={focused ? '#f3f4f2' : '#8D9383'} />
        )
      }
    },
    Saved: {
      screen: SavedScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="bookmark" size={24} color={focused ? '#f3f4f2' : '#8D9383'} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="account" size={24} color={focused ? '#f3f4f2' : '#8D9383'} />
        ),
      },
    },

  },
  {
    tabBarOptions: {
      activeTintColor: '#f3f4f2',  // Active tab color
      inactiveTintColor: '#8D9383',  // Inactive tab color
      style: {
        backgroundColor: '#0F3D3E',  // Set background color of tab bar
        borderTopColor: '#575954', // Remove border if desired
        borderWidth: .05,
        borderBottomColor: 'transparent',
        height: 12,  // Set the height of the tab bar (optional)
        paddingBottom: 0,
      },
      labelStyle: {
        fontSize: 12,
        marginTop: -5
      },
      tabStyle: {
      }
    },
  }
)

export default TabNavigator;