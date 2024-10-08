import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, fontSize, iconSize, spacing, borderRadius } from "../../theme/theme";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CustomBorder from "../../ui/CustomBorder";
import * as Haptics from 'expo-haptics';
import { TouchableOpacity } from "react-native-gesture-handler";

const SavedCreateNewList = () => {
  const triggerHapticFeedback = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }
  return (
    <>
      <CustomBorder
        borderSize={1}
        borderColor={colors.borderColorDark}
      />
      <TouchableOpacity 
        style={styles.container}
        onPress={triggerHapticFeedback}  
      >
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name='map-marker-plus' 
            style={styles.icon} 
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Create new list</Text>
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
  },
  textContainer: {
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.medium,
    padding: spacing.large,
    backgroundColor: colors.offWhiteFont,
    borderRadius: 50,
    shadowColor: colors.lightGray,
    shadowOffset: { width: -.5, height: .5 },
    shadowOpacity: .4,
    shadowRadius: borderRadius.xsmall,
  },
  icon: {
    color: colors.darkGray,
    fontSize: iconSize.medium
  }
})

export default SavedCreateNewList;