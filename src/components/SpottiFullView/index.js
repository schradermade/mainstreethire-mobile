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
    pictures = [] 
  } = spotti;

  return (
    <ScreenWrapper>
      <SpottiActionButtons name={name} id={id} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 150}}
      >
        <ImagesSection images={pictures} />
        <View style={styles.sectionContainer}>
          <TitleSection
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
          <SpottiDescriptionSection description={description} />
        </View>
        <View style={styles.sectionContainer}>
          <SpottiRatingSection rating={rating} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: spacing.xlarge,
    paddingHorizontal: spacing.xlarge,
  },
})

export default React.memo(SpottiFullView);
