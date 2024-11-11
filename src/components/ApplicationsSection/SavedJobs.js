import React from 'react';
import SavedJobTile from './SavedJobTile';
import { SAVED_TRIPS } from '../../constants';
import { ScrollView, StyleSheet } from 'react-native';
import { spacing } from '../../theme/theme';

const SavedJobs = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.scrollViewContent}
      >
        {SAVED_TRIPS.map((job, index) => (
          <SavedJobTile key={index} job={job} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingTop: spacing.small,
    paddingBottom: 150,
  },
});

export default SavedJobs;
