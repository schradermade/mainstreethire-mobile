import React from "react"
import RoundActionButton from "../../ui/RoundActionButton";
import { View, StyleSheet} from "react-native";
import { colors, iconSize, spacing } from "../../theme/theme";
import { useNavigation } from '@react-navigation/native';
import { shareSpottiLink } from "../../utils/shareSpottiLink";

const SpottiActionButtons = ({ name, id }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <RoundActionButton
        iconName={'arrow-left'}
        iconSize={iconSize.small}
        iconColor={colors.offWhiteFont}
        onIconPress={() => navigation.goBack()}
        // styling={{backgroundColor: colors.primaryButtonColor}}
      />
      <View style={styles.rightSideButtons}>
        <RoundActionButton 
          iconName={'share'} 
          iconSize={iconSize.small} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => shareSpottiLink(id, name)}
        />
        <RoundActionButton 
          iconName={'map-marker-check-outline'} 
          iconSize={iconSize.small} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => navigation.navigate('SpottiScreen')}
          styling={styles.actionButton}
        />
        <RoundActionButton 
          iconName={'bookmark-outline'} 
          iconSize={iconSize.small} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => navigation.navigate('SpottiScreen')}
          styling={styles.actionButton}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xlarge,
    marginTop: spacing.small,
    marginBottom: spacing.medium,
  },
  rightSideButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    marginLeft: spacing.large  
  }
})

export default SpottiActionButtons;