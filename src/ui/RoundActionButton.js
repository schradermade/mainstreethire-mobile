import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from "../theme/theme";

const RoundActionButton = ({ onIconPress, iconName, iconColor, iconSize, styling }) => {
  return (
    <TouchableOpacity onPress={onIconPress} style={styles.touchable}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons 
          name={iconName} 
          style={styling} 
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
    backgroundColor: colors.darkGray, 
    borderRadius: 25,      
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: colors.mediumGray,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: .5,  
    shadowRadius: 5,
  },
});

export default RoundActionButton;
