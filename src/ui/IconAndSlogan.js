import { Text, StyleSheet } from 'react-native';
import { colors, fontSize, spacing, iconSize, fonts } from '../theme/theme';
import {
  ICONS,
  MAINSTREETHIRE_NAME,
  MAINSTREETHIRE_SLOGAN,
} from '../constants';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const IconAndSlogan = ({ showSlogan }) => {
  const logo = () => (
    <MaterialCommunityIcons
      name={ICONS.store}
      style={styles.logo}
      size={iconSize.large}
    />
  );

  return (
    <>
      {logo()}
      <Text style={styles.nameText}>{MAINSTREETHIRE_NAME}</Text>
      {showSlogan && (
        <Text style={styles.nameSubText}>{MAINSTREETHIRE_SLOGAN}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  nameText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xxlarge,
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
  nameSubText: {
    fontSize: fontSize.large,
    color: colors.darkFont,
    marginTop: spacing.small,
    fontFamily: fonts.semiBold,
  },
  logo: {
    color: colors.spottiDark,
  },
});
