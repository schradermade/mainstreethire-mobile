import React from "react"
import RoundActionButton from "../../ui/RoundActionButton";
import { View, StyleSheet} from "react-native";
import { colors } from "../../theme/theme";
import { useNavigation } from '@react-navigation/native';
import { shareSpotti } from "../../utils/shareSpotti";

const ActionButtonsSection = ({ name, id }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.actionButtonsContainer]}>
      <RoundActionButton
        iconName={'arrow-left'}
        iconSize={22} 
        iconColor={colors.offWhiteFont}
        onIconPress={() => navigation.navigate('SpottiScreen')}
      />
      <View style={styles.shareVisitedSaveActionButtons}>
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
        />
        <RoundActionButton 
          iconName={'bookmark-outline'} 
          iconSize={22} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => navigation.navigate('SpottiScreen')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  shareVisitedSaveActionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 125
  }
})

export default ActionButtonsSection;