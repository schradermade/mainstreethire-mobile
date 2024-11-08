import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import { colors, fontSize, fonts } from '../theme/theme';
import SavedJobs from '../components/ApplicationsSection/SavedJobs';
import ScreenWrapper from '../components/ScreenWrapper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Submitted = () => <SavedJobs />;
const Interviewing = () => <SavedJobs />;
const Archived = () => <SavedJobs />;

const renderScene = SceneMap({
  submitted: Submitted,
  interviewing: Interviewing,
  archived: Archived,
});

const ApplicationsScreen = () => {
  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'submitted', title: `Active (${13})` },
    { key: 'interviewing', title: `Interviewing (${13})` },
    { key: 'archived', title: 'Archived' },
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
            fontSize: fontSize.small,
            fontFamily: fonts.bold,
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
  },
  indicator: {
    backgroundColor: colors.spottiDark,
  },
});

export default ApplicationsScreen;
