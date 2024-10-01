import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SpottiSubStats from "../Spotti/SpottiSubStats";
import { colors, fontSize, spacing } from "../../theme/theme";
import TagList from "../Tag/TagList";

const TitleSection = ({ title, rating, category, hoursofOperation, bestTimeToVisit, tags }) => {
  return (
    <View>
      <Text style={styles.titleText}>
        {title}
      </Text>
      <SpottiSubStats
        rating={rating} 
        category={category} 
        hoursofOperation={hoursofOperation} 
        iconColor={colors.spottiDark}
        textColorTheme='light'
        bestTimeToVisit={bestTimeToVisit}
        isFullSpottiView
      />
      <View style={styles.tagsContainer}>
        <TagList tags={tags} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: fontSize.xxlarge,
    color: colors.offWhiteFont
  },
  tagsContainer: {
    paddingTop: spacing.medium,
  }
})

export default TitleSection;