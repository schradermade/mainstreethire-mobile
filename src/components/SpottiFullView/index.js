import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { spacing } from "../../theme/theme";
import ScreenWrapper from "../ScreenWrapper";
import SpottiActionButtons from "./SpottiActionButtons";
import TitleSection from "./TitleSection";
import SpottiDescriptionSection from './SpottiDescriptionSection';
import Divider from "../../ui/Divider";
import SpottiRatingSection from "./SpottiRatingSection";
import ImagesSection from "./ImagesSection";

const SpottiFullView = ({ route }) => {
const { spotti: { 
  id, 
  name,
  tags,
  rating, 
  hoursofOperation, 
  category, 
  description, 
  bestTimeToVisit, 
  pictures
} } = route.params || {};

  return (
    <ScreenWrapper style={styles.container}>
      {/* Action Buttons Section */}
      <View style={styles.actionButtonContainer}>
        <SpottiActionButtons name={name} id={id} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // style={{paddingBottom: 1000}}
      >
        {/* Images Section*/}
          <ImagesSection images={pictures} />
        {/* Title Section */}
        <View style={styles.sectionContainer}>
          <TitleSection
            title={name}
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
        {/* Spotti Description Section */}
        <View style={styles.sectionContainer}>
          <SpottiDescriptionSection description={description} />
        </View>
        {/* Spotti Rating Section*/}
        <View style={styles.sectionContainer}>
          <SpottiRatingSection rating={rating} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingBottom: 300
  },
  sectionContainer: {
    paddingTop: spacing.xlarge,
    paddingHorizontal: spacing.xlarge,
  },
  actionButtonContainer: {
    paddingVertical: spacing.large,
    paddingHorizontal: spacing.large,
  },
  dividerContainer: {
    paddingTop: spacing.xlarge,
  }
})

export default SpottiFullView;