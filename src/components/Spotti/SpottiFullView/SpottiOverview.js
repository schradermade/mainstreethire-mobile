import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SpottiQuickFacts from '../SpottiQuickFacts';
import { colors, fontSize, spacing, fonts } from '../../../theme/theme';
import TagList from '../../Tag/TagList';

const TitleSection = ({
  name,
  tags,
  rating,
  category,
  bestTimeToVisit,
  hoursofOperation,
}) => {
  return (
    <View>
      <Text style={styles.titleText}>{name}</Text>
      <SpottiQuickFacts
        stats={{
          rating,
          category,
          bestTimeToVisit,
          hoursofOperation,
        }}
        textColorTheme="dark"
        isFullSpottiView
        directionAlignment={'horizontal'}
      />
      <View style={styles.tagsContainer}>
        <TagList tags={tags} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: fontSize.xxlarge,
    color: colors.offWhiteFont,
    fontFamily: fonts.semiBold,
  },
  tagsContainer: {
    paddingTop: spacing.medium,
  },
});

export default React.memo(TitleSection);
