import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { borderRadius, colors, fontSize, iconSize, spacing } from "../../theme/theme";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CustomBorder from "../../ui/CustomBorder";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";

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
            <MaterialCommunityIcons name={'map-marker-multiple'} style={styles.icon} />
          </View>
          <View>
            <Text style={styles.titleText}>{list.title}</Text>
            <Text style={styles.numSpottisText}>0 Spottis</Text>
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
    padding: spacing.large
  },
  titleText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.large,
    paddingBottom: spacing.xsmall
  },
  numSpottisText: {
    color: colors.darkFont
  },
  iconContainer: {
    padding: spacing.medium,
    backgroundColor: colors.darkGray,
    borderRadius: borderRadius.medium,
    marginRight: spacing.medium,
    shadowColor: colors.black,
    shadowOffset: { width: -.5, height: .5 },
    shadowOpacity: .3,
    shadowRadius: borderRadius.xsmall,
  },
  icon: {
    color: colors.offWhiteFont,
    fontSize: iconSize.medium
  }
})

export default SavedListTile;