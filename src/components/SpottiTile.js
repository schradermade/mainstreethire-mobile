import React, { useRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import Carousel from 'react-native-snap-carousel';

const SpottiTile = ({spotti}) => {
  const { id, name, description, category, hoursOfOperation, rating, tags, bestTimeToVisit, title } = spotti;
  const carouselRef = useRef(null);

  return (
    <View style={styles.container} >
        <Image source={require('../../assets/sunriver2.jpg')} style={styles.imageContainer} />

      <View>

        <View>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.subText}>Portland, Oregon</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.ratingWrapper}>
            <MaterialCommunityIcons name="star" style={styles.ratingIcon} />
            <Text style={styles.subText}>{rating}</Text>
          </View>
          <MaterialCommunityIcons name="circle-small" style={styles.ratingIcon} />
          <Text style={styles.subText}>{category}</Text>
          <MaterialCommunityIcons name="circle-small" style={styles.ratingIcon} />
          <Text>{hoursOfOperation}</Text>
        </View>
  
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 35
  },
  imageContainer: {
    borderRadius: 15,
    height: 300,
    width: 'fit-content',
    marginBottom: 10
  },
  nameText: {
    color: '#a3a89b',
    fontSize: 20
  },
  subText: {
    color: '#707568',

  },
  ratingWrapper: {
    flexDirection: 'row',
  },
  statsContainer: {
    marginTop: 5,
    flexDirection: 'row'
  },
  ratingIcon: {
    color: '#707568',
    fontSize: 14,
    marginRight: 1
  }
})

export default SpottiTile;

{/* <Text>{name}</Text>
<Text>{description}</Text>
<Text>{category}</Text>
<Text>{hoursOfOperation}</Text>
<Text>{rating}</Text>
<Text>{tags}</Text>
<Text>{bestTimeToVisit}</Text> */}