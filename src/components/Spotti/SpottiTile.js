import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { spacing, colors } from "../../theme/theme";
import SpottiSubStats from "./SpottiSubStats";
import ImageCarousel from "../ImageCarousel";

const SCREEN_WIDTH = Dimensions.get('window').width;

const SpottiTile = ({ name, pictures, stats, onPress}) => {

  return (
    <TouchableOpacity
    style={styles.container}
      onPress={onPress}
      activeOpacity={.75}
    >
      <ImageCarousel 
        images={pictures} 
      />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.subText}>Portland, Oregon</Text>
        </View>
        <SpottiSubStats
          stats={stats}
          textColorTheme='dark'
          iconColor={colors.darkFont}
        />
      </View>
    </TouchableOpacity>
  )
}

export default React.memo(SpottiTile);

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - spacing.xxxxlarge,
    alignSelf: 'center',
    marginBottom: spacing.xxxxlarge,
  },
  infoContainer: {
    marginTop: spacing.medium
  },
  nameText: {
    color: colors.offWhiteFont,
    fontSize: 20
  },
  subText: {
    color: colors.darkFont,
  },
})