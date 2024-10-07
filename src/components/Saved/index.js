import React, { useState } from "react";
import { StyleSheet, Dimensions, Text, View } from "react-native";
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
import { colors, fontSize, spacing } from "../../theme/theme";
import SavedLists from "./SavedLists";
import Downloads from "./Downloads";

const ListsRoute = () => <SavedLists />;
const DownloadsRoute = () => <Downloads />;

const renderScene = SceneMap({
  lists: ListsRoute,
  downloads: DownloadsRoute
});

const SavedSection = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'lists', title: 'Lists'},
    { key: 'downloads', title: 'Downloads' },
  ]);

  // Customize TabBar
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
      tabStyle={{
      }}
      renderLabel={({route, focused}) => (
        <Text style={{
          color: focused ? colors.offWhiteFont : colors.darkFont,
          fontSize: fontSize.large,
          margin: -10,
          paddingRight: spacing.xxxlarge,
        }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <>
      <Text style={styles.savedText}>Saved</Text>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={renderTabBar}
      />
    </>
  );
};

const styles = StyleSheet.create({
  savedText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xxxlarge,
    marginTop: spacing.xxxxlarge,
    marginBottom: spacing.small,
    marginLeft: spacing.large
  },
  tabBar: {
    backgroundColor: colors.primaryTest,
  },
  indicator: {
    backgroundColor: colors.spottiDark,
  }
});

export default SavedSection;