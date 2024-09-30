import React from "react";
import { StyleSheet, View } from "react-native";
import { colors, spacing } from "../../theme/theme";
import TitleArea from "./TitleArea";
import ScreenWrapper from "../ScreenWrapper";
import RoundActionButton from "../../ui/RoundActionButton";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import SpottiFullDescription from "./SpottiFullDescription";
import Divider from "../../ui/Divider";
import ImageCarousel from "../ImageCarousel";
import { imagePathFormat } from "../../utils/imagePathFormat";

const SpottiFullView = ({ route }) => {
const { spotti: {name, rating, hoursofOperation, category, description, bestTimeToVisit, pictures} } = route.params || {};

const navigation = useNavigation();

  return (
    <ScreenWrapper style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false} 
      >
        <View style={[styles.actionButtonsContainer, styles.segmentPadding]}>
          <RoundActionButton 
            iconName={'arrow-left'} 
            iconSize={22} 
            iconColor={colors.offWhiteFont}
            onIconPress={() => navigation.navigate('SpottiScreen')}
          />
          <View style={styles.shareVisitedSaveActionButtons}>
            <RoundActionButton 
              iconName={'share'} 
              iconSize={22} 
              iconColor={colors.offWhiteFont}
              onIconPress={() => navigation.navigate('SpottiScreen')}
            />
            <RoundActionButton 
              iconName={'map-marker-check-outline'} 
              iconSize={22} 
              iconColor={colors.offWhiteFont}
              onIconPress={() => navigation.navigate('SpottiScreen')}
            />
            <RoundActionButton 
              iconName={'bookmark-outline'} 
              iconSize={22} 
              iconColor={colors.offWhiteFont}
              onIconPress={() => navigation.navigate('SpottiScreen')}
            />
          </View>
        </View>
        <View style={styles.segmentPadding}>
          <ImageCarousel images={imagePathFormat(pictures)} />
        </View>
        <View style={styles.segmentPadding}>
          <TitleArea
            title={name}
            rating={rating}
            category={category}
            hoursofOperation={hoursofOperation}
            bestTimeToVisit={bestTimeToVisit}
          />
        </View>
        <View style={styles.segmentPadding}>
          <Divider />
        </View>
        <View style={styles.segmentPadding}>
          <SpottiFullDescription description={description} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  segmentPadding: {
    paddingBottom: spacing.xxxlarge
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  shareVisitedSaveActionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 125
  }
})

export default SpottiFullView;