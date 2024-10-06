import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors, borderRadius } from "../theme/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const RoundActionButton = ({ 
  onIconPress, 
  iconName, 
  iconColor, 
  iconSize, 
  styling 
}) => {
  return (
    <TouchableOpacity onPress={onIconPress} style={styles.touchable}>
      <View style={[styles.iconWrapper, styling]}>
        <MaterialCommunityIcons 
          name={iconName} 
          size={iconSize}
          color={iconColor || 'white'}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
  },
  iconWrapper: {
    height: 36,            
    width: 36,             
    // backgroundColor: colors.primaryTest, 
    borderRadius: 18,
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: .25,
    shadowRadius: borderRadius.small,
  },
});

export default RoundActionButton;
