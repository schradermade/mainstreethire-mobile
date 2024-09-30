import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors, spacing } from "../../theme/theme";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const SpottiSubStats = ({ rating, category, starIconColor, textColorTheme, bestTimeToVisit }) => {
  console.log('RATING:', rating);
  return (
    <View style={styles.statsContainer}>
          <View style={styles.ratingWrapper}>
            <MaterialCommunityIcons 
              name="star" 
              color={starIconColor}
              size={16}
              style={{paddingRight: spacing.xxsmall}}
            />
            <Text 
              style={
                {color: textColorTheme === 'dark' ? 
                  colors.darkFont 
                  : colors.offWhiteFont
                }
              }
            >
              {rating}
            </Text>
          </View>
          <MaterialCommunityIcons 
            name="circle-small" 
            color={colors.darkFont}
            size={14}
          />
          <Text 
            style={
              {color: textColorTheme === 'dark' ? 
                colors.darkFont 
                : colors.offWhiteFont
              }
            }
          >{category}</Text>
          <MaterialCommunityIcons 
            name="circle-small" 
            color={colors.darkFont} 
            size={14}
          />
          <MaterialCommunityIcons 
              name="clock" 
              color={colors.darkFont} 
              size={14}
              style={{paddingRight: spacing.xxsmall}}
            /> 
          <Text 
            style={
              {color: textColorTheme === 'dark' ? 
                colors.darkFont 
                : colors.offWhiteFont
              }
            }
          >
            {bestTimeToVisit}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
  statsContainer: {
    marginTop: 5,
    flexDirection: 'row'
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  subText: {
    color: colors.darkFont,
  },
  starIcon: {
    // color: colors.,
  }
})

export default SpottiSubStats;