import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import fetchSpottis from "../../api/spotti";
import ScreenWrapper from "../ScreenWrapper";
import { colors, fonts, spacing } from "../../theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WhenCard from "./WhenCard";
import ExpandTileGroup from "../ExpandTileGroup";
import SpottiList from "../Spotti/SpottiList";
import Divider from "../../ui/Divider";
import SavedListActionButtons from "./SavedListActionButtons";
import WhereCard from "./WhereCard";
import WhoCard from "./WhoCard";
import SpottiMiniTile from "../Spotti/SpottiMiniTile";

const SavedList = ({ route }) => {
  const { list } = route.params;
  const [loading, setLoading] = useState(true);
  const [spottis, setSpottis] = useState();
  const [expandedCard, setExpandedCard] = useState(false);
  const insets = useSafeAreaInsets();

  const spottiApi = async () => {
    try {
      const response = await fetchSpottis.get();
      setSpottis(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    spottiApi();
  }, []);

  const handleExpand = (isExpand) => {
    setExpandedCard(isExpand);
  };

  return (
    <ScreenWrapper
      screenStyles={{
        paddingTop: insets.top + spacing.small,
        backgroundColor: colors.primaryColor,
      }}
    >
      <View style={styles.container}>
        <SavedListActionButtons listName={list.title} />
        <View style={styles.expandTileGroupContainer}>
          <ExpandTileGroup isExpanded={handleExpand}>
            <WhenCard />
            <WhereCard />
            <WhoCard />
          </ExpandTileGroup>
        </View>
      </View>
      <View style={{ paddingBottom: expandedCard ? spacing.xxxlarge : 0 }}>
        {!expandedCard ? (
          <>
            <Text style={styles.numSpottisText}>{spottis?.length} Spottis</Text>
            <Divider />
          </>
        ) : null}
      </View>
      <SpottiList spottis={spottis} TileComponent={SpottiMiniTile} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.medium,
  },
  expandTileGroupContainer: {
    height: "fit-content",
  },
  numSpottisText: {
    marginBottom: spacing.xsmall,
    fontFamily: fonts.semiBold,
    color: colors.darkFont,
    alignSelf: "center",
  },
});
export default SavedList;
