import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors, borderRadius, iconSize } from "../theme/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const RoundActionButton = ({ 
  onIconPress, 
  iconName, 
  iconColor, 
  iconSize, 
  styling 
}) => {

  return (
    <TouchableOpacity onPress={onIconPress}>
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
  iconWrapper: {
    padding: 5,          
    borderRadius: iconSize.large / 2,
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: .25,
    shadowRadius: borderRadius.small,
  },
});

export default RoundActionButton;
