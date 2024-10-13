import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { spacing } from "../../../theme/theme";
import ScreenWrapper from "../../ScreenWrapper";
import SpottiActionButtons from "./SpottiActionButtons";
import SpottiOverview from "./SpottiOverview";
import SpottiDescription from "./SpottiDescription";
import Divider from "../../../ui/Divider";
import SpottiRating from "./SpottiRating";
import ImageCarousel from "../../ImageCarousel";

const SpottiFullView = ({ route }) => {
  const spotti = route.params.item || {};
  const {
    id,
    name,
    category,
    hoursofOperation,
    bestTimeToVisit,
    tags,
    rating,
    description,
    pictures = [],
  } = spotti;

  return (
    <ScreenWrapper>
      <View style={styles.actionButtonsContainer}>
        <SpottiActionButtons />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        <ImageCarousel images={pictures} isFullView />
        <View style={styles.sectionContainer}>
          <SpottiOverview
            name={name}
            rating={rating}
            category={category}
            hoursofOperation={hoursofOperation}
            bestTimeToVisit={bestTimeToVisit}
            tags={tags}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Divider />
        </View>
        <View style={styles.sectionContainer}>
          <SpottiDescription description={description} />
        </View>
        <View style={styles.sectionContainer}>
          <SpottiRating rating={rating} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  actionButtonsContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    right: 10,
    zIndex: 1,
  },
  sectionContainer: {
    paddingTop: spacing.xlarge,
    paddingHorizontal: spacing.xlarge,
  },
});

export default React.memo(SpottiFullView);
