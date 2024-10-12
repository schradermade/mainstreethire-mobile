import React from "react";
import { View, StyleSheet } from "react-native";
import { colors, iconSize, spacing } from "../../theme/theme";
import RoundActionButton from "../../ui/RoundActionButton";

const ProfileActionButtons = () => {
  return (
    <View style={styles.editButtonsContainer}>
          <RoundActionButton
            onIconPress={() => console.log('clicked cog icon')}
            iconName='cog'
            iconColor={colors.offWhiteFont} 
            iconSize={iconSize.small}
            // theme='dark'
            // styling={{marginRight: 100}} 
          />
          <RoundActionButton
            iconName='dots-horizontal'
            onIconPress={() => console.log('clicked dots icon')}
            iconColor={colors.offWhiteFont} 
            iconSize={iconSize.small}
            styling={{marginLeft: spacing.large}}
          />
        </View>
  )
}

const styles = StyleSheet.create({
  editButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default ProfileActionButtons;