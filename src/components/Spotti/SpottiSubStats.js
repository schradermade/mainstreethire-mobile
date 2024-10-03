import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors, spacing } from "../../theme/theme";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const SpottiSubStats = ({ rating, category, iconColor, textColorTheme, bestTimeToVisit, isFullSpottiView }) => {

  return (
    <View style={styles.statsContainer}>
        {!isFullSpottiView &&
          <>
            <View style={styles.statContainer}>
              <MaterialCommunityIcons 
                name="star" 
                color={iconColor}
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
          </>
        }
          <View style={styles.statContainer}>
            <MaterialCommunityIcons 
                name="food" 
                color={iconColor}
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
            >{category}</Text>
          </View>
          <MaterialCommunityIcons 
            name="circle-small" 
            color={iconColor} 
            size={14}
          />
          <MaterialCommunityIcons 
              name="clock" 
              color={iconColor} 
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
    marginTop: spacing.xsmall,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subText: {
    color: colors.darkFont,
  },
})

export default SpottiSubStats;