import React from "react"
import RoundActionButton from "../../ui/RoundActionButton";
import { View, StyleSheet} from "react-native";
import { colors, spacing } from "../../theme/theme";
import { useNavigation } from '@react-navigation/native';
import { shareSpotti } from "../../utils/shareSpotti";

const SpottiActionButtons = ({ name, id }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.goBackButtonContainer}>
      <RoundActionButton
        iconName={'arrow-left'}
        iconSize={22}
        iconColor={colors.offWhiteFont}
        onIconPress={() => navigation.goBack()}
      />
      <View style={styles.rightSideButtons}>
        <RoundActionButton 
          iconName={'share'} 
          iconSize={22} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => shareSpotti(id, name)}
        />
        <RoundActionButton 
          iconName={'map-marker-check-outline'} 
          iconSize={22} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => navigation.navigate('SpottiScreen')}
          styling={styles.button}

        />
        <RoundActionButton 
          iconName={'bookmark-outline'} 
          iconSize={22} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => navigation.navigate('SpottiScreen')}
          styling={styles.button}
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
    // width: 125
  },
  button: {
    marginLeft: spacing.medium
  }
})

export default SpottiActionButtons;