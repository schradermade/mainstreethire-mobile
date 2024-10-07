import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, fontSize, spacing } from "../../theme/theme";
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
    height: 80
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
    margin: spacing.large,
    backgroundColor: colors.offWhiteFont,
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  icon: {
    color: colors.darkGray,
    fontSize: 26
  }
})

export default SavedCreateNewList;