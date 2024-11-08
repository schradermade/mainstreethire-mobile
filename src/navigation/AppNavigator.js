import React, { Suspense } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import CommunityScreen from '../screens/CommunityScreen';
import NavigateScreen from '../screens/NavigateScreen';
import ResumeScreen from '../screens/ResumeScreen';
import JobsScreen from '../screens/JobsScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

// Components
import JobFullView from '../components/Job/JobFullView';
import SavedJob from '../components/ApplicationsSection/SavedJob';
import EmailView from '../components/WelcomeSection/EmailView';
import PasswordView from '../components/WelcomeSection/PasswordView';
import UsersNameView from '../components/WelcomeSection/UsersNameView';
import ApplicationsScreen from '../screens/ApplicationsScreen';

// Constants
import { BOTTOM_TAB_ICONS } from '../constants';
import { colors, fonts, fontSize } from '../theme/theme';

import { useSelector } from 'react-redux';

// Tab and Stack Navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['hotspotti-mobile://'],
  config: {
    screens: {
      Spottis: {
        screens: {
          SpottiScreen: '',
          JobFullView: 'spotti/:id',
        },
      },
    },
  },
};

function AppNavigator() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        {/* Main navigation flow */}
        {true ? (
          <Stack.Screen
            name="Tabs"
            component={TabsNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="WelcomeStack"
            component={WelcomeStack}
            options={{ headerShown: false }}
          />
        )}
        {/* JobFullStack - This stack is outside the TabNavigator */}
        <Stack.Screen
          name="JobFullStack"
          component={JobFullStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavedApplicationsStack"
          component={SavedApplicationsStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Jobs"
      screenOptions={({ route }) => ({
        lazy: true,
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name={BOTTOM_TAB_ICONS[route.name].name}
            size={BOTTOM_TAB_ICONS[route.name].size}
            color={
              focused
                ? BOTTOM_TAB_ICONS[route.name].focusedColor
                : BOTTOM_TAB_ICONS[route.name].unfocusedColor
            }
          />
        ),
        tabBarStyle: {
          backgroundColor: colors.primaryColor,
          borderTopColor: colors.borderColorDark,
        },
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              color: focused
                ? BOTTOM_TAB_ICONS[route.name].focusedColor
                : BOTTOM_TAB_ICONS[route.name].unfocusedColor,
              fontSize: fontSize.small,
              fontFamily: fonts.regular,
            }}
          >
            {route.name}
          </Text>
        ),
      })}
    >
      <Tab.Screen
        name="Jobs"
        component={JobStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Applications"
        component={ApplicationsStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Resume"
        component={ResumeScreen}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{ headerShown: false }}
      /> */}
      {/* <Tab.Screen
        name="Navigate"
        component={NavigateScreen}
        options={{ headerShown: false }}
      /> */}
    </Tab.Navigator>
  );
}

function WelcomeStack() {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
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
  );
}

// JobStack stays within the TabsNavigator
function JobStack() {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
      <Stack.Navigator>
        <Stack.Screen
          name="SpottiScreen"
          component={JobsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Suspense>
  );
}

// JobFullStack - This stack handles deeper navigation without the tab bar
function JobFullStack() {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
      <Stack.Navigator>
        <Stack.Screen
          name="JobFullView"
          component={JobFullView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Suspense>
  );
}

function SavedApplicationsStack() {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
      <Stack.Navigator>
        <Stack.Screen
          name="SavedJob"
          component={SavedJob}
          // initialParams={route.params}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JobFullView"
          component={JobFullView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Suspense>
  );
}

function ApplicationsStack() {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
      <Stack.Navigator>
        <Stack.Screen
          name="ApplicationsScreen"
          component={ApplicationsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavedJob"
          component={SavedJob}
          options={{ headerShown: false, tabBarStyle: { display: 'none' } }}
        />
        <Stack.Screen
          name="JobFullView"
          component={JobFullView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Suspense>
  );
}

export default AppNavigator;
