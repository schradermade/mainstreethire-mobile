import React, { Suspense, useState } from 'react';
import { Text, ActivityIndicator } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Updated import for native stack

// Screens
import CommunityScreen from "../screens/CommunityScreen";
import NavigateScreen from "../screens/NavigateScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SavedScreen from "../screens/SavedScreen";
import SpottisScreen from "../screens/SpottisScreen";
import WelcomeScreen from '../screens/WelcomeScreen';

import SpottiFullView from '../components/Spotti/SpottiFullView';
import SavedList from "../components/SavedSection/SavedList";
import EmailView from '../components/WelcomeSection/EmailView';
import PasswordView from '../components/WelcomeSection/PasswordView';
import UsersNameView from '../components/WelcomeSection/UsersNameView';

import { BOTTOM_TAB_ICONS } from "../constants";
import { colors } from "../theme/theme";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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

function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer linking={linking}>
      {isLoggedIn ? <TabsNavigator /> : <WelcomeStack />}
    </NavigationContainer>
  )
}

function TabsNavigator() {

  return (
      <Tab.Navigator
        initialRouteName="Spottis"
        screenOptions={({ route }) => ({
          lazy: true,
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
                  : {marginTop: 6}}
              />
            )
          },
          tabBarStyle: {
            backgroundColor: colors.primaryColor,
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
          component={SavedStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
  )
}

function WelcomeStack() {
  return (
    <Suspense fallback={ <ActivityIndicator size='large' color='#0000ff' /> }>
      <Stack.Navigator>
        <Stack.Screen 
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailView"
          component={EmailView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordView"
          component={PasswordView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UsersNameView"
          component={UsersNameView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabsNavigator"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Suspense>
  )
}

function SpottiStack() {
  return (
    <Suspense fallback={<ActivityIndicator size='large' color='#0000ff' />}>
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
    </Suspense>
  )
}

function SavedStack() {
  return (
    <Suspense fallback={<ActivityIndicator size='large' color='#0000ff' />}>
      <Stack.Navigator>
        <Stack.Screen
          name="SavedScreen"
          component={SavedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SavedList"
          component={SavedList}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SpottiFullView"
          component={SpottiFullView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Suspense>
  )
}

export default AppNavigator;
