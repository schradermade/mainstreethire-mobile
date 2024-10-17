import React, { useState } from "react";
import { StyleSheet, Dimensions, Text, View } from "react-native";
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
import { colors, fontSize, spacing, fonts, shadowRadius } from "../theme/theme";
import SavedTrips from "../components/TripSection/SavedTrips";
import ScreenWrapper from "../components/ScreenWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ICONS } from "../constants";

const InProgress = () => <SavedTrips />;
const Planned = () => <SavedTrips />;
const Planning = () => <SavedTrips />;
const Past = () => <SavedTrips />;

const renderScene = SceneMap({
  inProgress: InProgress,
  planned: Planned,
  planning: Planning,
  past: Past,
});

const TripScreen = () => {
  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "inProgress", title: "In Progress" },
    { key: "planned", title: "Planned" },
    { key: "planning", title: "Planning" },
    { key: "past", title: "Past" },
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
      <View style={styles.container}>
        <Text style={styles.headerText}>Spotti Trips</Text>
        <MaterialCommunityIcons
          name={ICONS.spottisMultiple}
          size={30}
          color={colors.spottiDark}
          style={styles.headerIcon}
        />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={renderTabBar}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: spacing.large,
    marginVertical: spacing.large,
  },
  headerText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xxlarge,
    fontFamily: fonts.regular,
  },
  tabBar: {
    backgroundColor: colors.primaryColor,
    marginLeft: spacing.small,
  },
  indicator: {
    backgroundColor: colors.spottiDark,
  },
  headerIcon: {
    marginLeft: spacing.xsmall,
    shadowColor: colors.spottiDark,
    shadowOffset: { width: 2, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: shadowRadius.small,
  },
});

export default TripScreen;
