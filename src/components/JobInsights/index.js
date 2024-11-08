import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Thread from './Thread';
import { colors, fonts, fontSize, spacing } from '../../theme/theme';
import Divider from '../../ui/Divider';
import TopContributors from './TopContributors';
import { DEV_THREADS } from '../../constants';

const SpottiInsights = ({ spottiName }) => {
  return (
    <View>
      <View>
        <Text style={styles.headerText}>{spottiName} Insights</Text>
        <Divider marginT={spacing.xsmall} marginB={spacing.xsmall} />
        <View style={styles.headerSections}>
          <TopContributors topContributors={DEV_THREADS} />
          <Divider marginT={spacing.xsmall} />
        </View>
      </View>
      <Thread contributors={DEV_THREADS} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.large,
    color: colors.offWhiteFont,
    alignSelf: 'center',
    marginTop: spacing.small,
  },
  headerSections: {
    paddingHorizontal: spacing.large,
  },
});

export default SpottiInsights;
