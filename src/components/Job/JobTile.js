import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts, fontSize, spacing } from '../../theme/theme';
import SpottiQuickFacts from './JobQuickFacts';
import ImageCarousel from '../ImageCarousel';

const JobTile = ({ name, images, stats, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={{ marginHorizontal: spacing.xxlarge }}
    >
      <ImageCarousel images={images} />
      <View>
        <Text style={styles.nameText} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.subText}>Portland, Oregon</Text>
        <SpottiQuickFacts
          stats={stats}
          textColorTheme="dark"
          directionAlignment={'horizontal'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(JobTile);

const styles = StyleSheet.create({
  nameText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xlarge,
    fontFamily: fonts.semiBold,
    paddingTop: spacing.xsmall,
  },
  subText: {
    color: colors.darkFont,
    fontFamily: fonts.regular,
  },
});
