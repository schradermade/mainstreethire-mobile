import React from "react"
import RoundActionButton from "../../ui/RoundActionButton";
import { View, StyleSheet} from "react-native";
import { colors, iconSize, spacing } from "../../theme/theme";
import { useNavigation } from '@react-navigation/native';
import { shareSpotti } from "../../utils/shareSpotti";

const SpottiActionButtons = ({ name, id }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.goBackButtonContainer}>
      <RoundActionButton
        iconName={'arrow-left'}
        iconSize={iconSize.small}
        iconColor={colors.offWhiteFont}
        onIconPress={() => navigation.goBack()}
        styling={{backgroundColor: colors.primaryButtonColor}}
      />
      <View style={styles.rightSideButtons}>
        <RoundActionButton 
          iconName={'share'} 
          iconSize={iconSize.small} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => shareSpotti(id, name)}
          styling={styles.button}
        />
        <RoundActionButton 
          iconName={'map-marker-check-outline'} 
          iconSize={iconSize.small} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => navigation.navigate('SpottiScreen')}
          styling={[styles.button, {marginLeft: spacing.medium}]}
        />
        <RoundActionButton 
          iconName={'bookmark-outline'} 
          iconSize={iconSize.small} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => navigation.navigate('SpottiScreen')}
          styling={[styles.button, {marginLeft: spacing.medium}]}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  goBackButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightSideButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: colors.primaryButtonColor
  }
})

export default SpottiActionButtons;