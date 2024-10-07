import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SpottiSubStats from "../Spotti/SpottiSubStats";
import { colors, fontSize, spacing } from "../../theme/theme";
import TagList from "../Tag/TagList";

const TitleSection = ({ name, tags, rating, category, bestTimeToVisit, hoursofOperation }) => {

  return (
    <View>
      <Text style={styles.titleText}>
        {name}
      </Text>
      <SpottiSubStats
        stats={
          {
            rating, 
            category, 
            bestTimeToVisit, 
            hoursofOperation
          }
        }
        iconColor={colors.spottiDark}
        textColorTheme='light'
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

export default React.memo(TitleSection);
