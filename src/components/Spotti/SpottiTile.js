import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ImageCarousel from "../ImageCarousel";
import { spacing, colors } from "../../theme/theme";
import { useNavigation } from '@react-navigation/native';
import { imagePathFormat } from "../../utils/imagePathFormat";
import SpottiSubStats from "./SpottiSubStats";

const SpottiTile = ({spotti}) => {
  const { id, name, description, category, hoursofOperation, rating, tags, bestTimeToVisit, title, pictures } = spotti;
  
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => navigation.navigate('SpottiFullView', { spotti })}
      activeOpacity={1}
    >
      <ImageCarousel images={imagePathFormat(pictures)} />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.subText}>Portland, Oregon</Text>
        </View>
        <SpottiSubStats
          rating={rating} 
          category={category} 
          hoursofOperation={hoursofOperation} 
          textColorTheme='dark'
          iconColor={colors.darkFont}
          bestTimeToVisit={bestTimeToVisit}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 35
  },
  infoContainer: {
    marginTop: spacing.medium
  },
  // imageContainer: {
  //   borderRadius: 15,
  //   height: 300,
  //   width: 'fit-content',
  //   marginBottom: 10
  // },
  nameText: {
    color: colors.offWhiteFont,
    fontSize: 20
  },
  subText: {
    color: colors.darkFont,
  },



})

export default SpottiTile;