import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import { colors, fontSize, spacing, fonts } from '../theme/theme';
import SavedTrips from '../components/TripSection/SavedTrips';
import ScreenWrapper from '../components/ScreenWrapper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const InProgress = () => <SavedTrips />;
const Planning = () => <SavedTrips />;
const Past = () => <SavedTrips />;

const renderScene = SceneMap({
  inProgress: InProgress,
  planning: Planning,
  past: Past,
});

const TripScreen = () => {
  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'inProgress', title: 'In Progress' },
    { key: 'planning', title: 'Planning' },
    { key: 'past', title: 'Past' },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
      renderLabel={({ route, focused }) => (
        <Text
          style={{
            color: focused ? colors.offWhiteFont : colors.darkFont,
            fontSize: fontSize.medium,
            fontFamily: fonts.regular,
          }}
        >
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <ScreenWrapper screenStyles={{ paddingTop: insets.top }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={renderTabBar}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primaryColor,
    marginLeft: spacing.small,
  },
  indicator: {
    backgroundColor: colors.spottiDark,
  },
});

export default TripScreen;
