import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RoundActionButton from '../../../ui/RoundActionButton';
import { colors, iconSize, spacing } from '../../../theme/theme';
import { shareSpottiLink } from '../../../utils/shareSpottiLink';
import { ICONS } from '../../../constants';

const SpottiActionButtons = ({ name, id }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <RoundActionButton
        iconName={ICONS.arrowLeft}
        iconSize={iconSize.small}
        iconColor={colors.buttonActionIconColor}
        onIconPress={() => navigation.goBack()}
        styling={[styles.actionButton]}
      />
      <View style={styles.rightSideButtons}>
        <RoundActionButton
          iconName={ICONS.share}
          iconSize={iconSize.small}
          iconColor={colors.buttonActionIconColor}
          onIconPress={() => shareSpottiLink(id, name)}
          styling={[styles.actionButton]}
        />
        <RoundActionButton
          iconName={ICONS.visitedLocation}
          iconSize={iconSize.small}
          iconColor={colors.buttonActionIconColor}
          onIconPress={() => navigation.navigate('SpottiScreen')}
          styling={[styles.actionButton, { marginLeft: spacing.large }]}
        />
        <RoundActionButton
          iconName={ICONS.save}
          iconSize={iconSize.small}
          iconColor={colors.buttonActionIconColor}
          onIconPress={() => navigation.navigate('SpottiScreen')}
          styling={[styles.actionButton, { marginLeft: spacing.large }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.small,
  },
  rightSideButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: colors.buttonActionBackgroundColor,
  },
});

export default SpottiActionButtons;
