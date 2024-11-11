import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ScreenWrapper from '../ScreenWrapper';
import { colors, fonts, spacing } from '../../theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ExpandTileGroup from '../ExpandTileGroup';
import JobList from '../Job/JobList';
import Divider from '../../ui/Divider';
import SavedJobActionButtons from './SavedJobActionButtons';
import WhereCard from './InfoCards/WhereCard';
import WhoCard from './InfoCards/WhoCard';
import SpottiMiniTile from '../Job/JobMiniTile';
import WhenCard from './InfoCards/WhenCard';

const SavedJob = ({ route }) => {
  const { job } = route.params;

  const [loading, setLoading] = useState(true);
  const [spottis, setSpottis] = useState();
  const [expandedCard, setExpandedCard] = useState(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {}, []);

  const handleExpand = (isExpand) => {
    setExpandedCard(isExpand);
  };

  return (
    <ScreenWrapper
      screenStyles={{
        paddingTop: insets.top + spacing.small,
        backgroundColor: colors.primaryColor,
      }}
    >
      <View style={styles.container}>
        <SavedJobActionButtons jobName={job.title} />
        <View style={styles.expandTileGroupContainer}>
          <ExpandTileGroup isExpanded={handleExpand}>
            <WhenCard />
            <WhereCard />
            <WhoCard />
          </ExpandTileGroup>
        </View>
      </View>
      <View style={{ paddingBottom: expandedCard ? spacing.xxxlarge : 0 }}>
        {!expandedCard ? (
          <>
            <Text style={styles.numSpottisText}>
              {spottis?.length} Jobs in this trip
            </Text>
            <Divider />
          </>
        ) : null}
      </View>
      <JobList spottis={spottis} TileComponent={SpottiMiniTile} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.medium,
  },
  expandTileGroupContainer: {
    height: 'fit-content',
  },
  numSpottisText: {
    marginBottom: spacing.xsmall,
    fontFamily: fonts.semiBold,
    color: colors.darkFont,
    alignSelf: 'center',
  },
});

export default SavedJob;
