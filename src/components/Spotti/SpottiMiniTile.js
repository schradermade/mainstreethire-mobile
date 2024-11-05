import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import { spacing, colors, fonts } from '../../theme/theme';
import SpottiQuickFacts from './SpottiQuickFacts';
import ImageCarousel from '../ImageCarousel';

const SpottiMiniTile = ({ name, images, stats, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}
    >
      <ImageCarousel images={images} width={150} />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.nameText} numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Text>
          <Text style={styles.subText}>Portland, Oregon</Text>
        </View>
        <SpottiQuickFacts
          stats={stats}
          textColorTheme="dark"
          directionAlignment={'vertical'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(SpottiMiniTile);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: spacing.large,
  },
  infoContainer: {
    flex: 1,
    marginLeft: spacing.medium,
  },
  nameText: {
    color: colors.offWhiteFont,
    fontSize: 20,
    fontFamily: fonts.semiBold,
  },
  subText: {
    color: colors.darkFont,
    fontFamily: fonts.regular,
  },
});
