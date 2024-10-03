import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { borderRadius, colors, fontSize, spacing } from "../../theme/theme";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CustomBorder from "../../ui/CustomBorder";
import { useNavigation } from '@react-navigation/native';

const SavedListTile = ({ list }) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity 
        key={list.title} 
        onPress={() => navigation.navigate('SavedList', {list})}
      >
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={list.iconName} style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{list.title}</Text>
            <Text style={styles.numTrailsText}>0 Spottis</Text>
          </View>
        </View>
      </TouchableOpacity>
      <CustomBorder 
          borderSize={1}
          borderColor={colors.borderColorDark}
          marginHoriz={spacing.large}
        />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80
  },
  titleText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.large,
    paddingBottom: spacing.xsmall
  },
  numTrailsText: {
    color: colors.darkFont
  },
  textContainer: {
    paddingVertical: spacing.large,
  },
  iconContainer: {
    padding: spacing.small,
    margin: spacing.large,
    backgroundColor: colors.darkGray,
    borderRadius: borderRadius.medium,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: colors.offWhiteFont,
    fontSize: 26
  }
})

export default SavedListTile;