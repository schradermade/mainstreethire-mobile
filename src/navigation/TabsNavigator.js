import { Text } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import SpottisScreen from "../screens/SpottisScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NavigateScreen from "../screens/NavigateScreen";
import SpottiFullView from "../components/SpottiFullView";
import SavedScreen from "../screens/SavedScreen";
import CommunityScreen from "../screens/CommunityScreen";

import { BOTTOM_TAB_ICONS } from "../constants";
import { colors } from "../theme/theme";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const linking = {
  prefixes: ['hotspotti-mobile://'],
  config: {
    screens: {
      Spottis: {
        screens: {
          SpottiScreen: '',
          SpottiFullView: 'spotti/:id',
        },
      },
    },
  },
};

function SpottiStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SpottiScreen"
        component={SpottisScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="SpottiFullView" 
        component={SpottiFullView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

function TabsNavigator() {

  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator
        initialRouteName="Spottis"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons 
                name={BOTTOM_TAB_ICONS[route.name].name}
                size={BOTTOM_TAB_ICONS[route.name].size}
                color={focused ?
                  BOTTOM_TAB_ICONS[route.name].focusedColor 
                  : BOTTOM_TAB_ICONS[route.name].unfocusedColor}
                style={route.name === 'Spottis' ? 
                  {} 
                  : {marginBottom: -16}}
              />
            )
          },
          tabBarStyle: {
            backgroundColor: colors.primaryColor,
            height: 55,
            borderTopColor: colors.borderColorDark,
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={{ 
                color: focused ? 
                  BOTTOM_TAB_ICONS[route.name].focusedColor 
                  : BOTTOM_TAB_ICONS[route.name].unfocusedColor, fontSize: 11 }}>
                {route.name}
              </Text>
            );
          },
        })}
      >
        <Tab.Screen
          name='Community'
          component={CommunityScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Navigate'
          component={NavigateScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name='Spottis' 
          component={SpottiStack} 
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Saved'
          component={SavedScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabsNavigator;
