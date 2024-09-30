import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SpottiSubStats from "./SpottiSubStats";
import { colors, fontSize } from "../../theme/theme";

const TitleArea = ({ title, rating, category, hoursofOperation, bestTimeToVisit }) => {
  return (
    <View>
      <Text style={styles.title}>
        {title}
      </Text>
      <SpottiSubStats
        rating={rating} 
        category={category} 
        hoursofOperation={hoursofOperation} 
        starIconColor={colors.spottiDark}
        textColorTheme='light'
        bestTimeToVisit={bestTimeToVisit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize.xxlarge,
    color: colors.offWhiteFont
  }
})

export default TitleArea;