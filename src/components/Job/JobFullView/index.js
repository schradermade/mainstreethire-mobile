import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { spacing } from '../../../theme/theme';
import ScreenWrapper from '../../ScreenWrapper';
import JobActionButtons from './JobActionButtons';
import JobOverview from './JobOverview';
import JobDescription from './JobDescription';
import Divider from '../../../ui/Divider';
import ImageCarousel from '../../ImageCarousel';
import GlowingButton from '../../../ui/GlowingButton';
import SlideUpModal from '../../SlideUpModal';
import SpottiInsights from '../../JobInsights';

const JobFullView = ({ route }) => {
  const insets = useSafeAreaInsets();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const spotti = route.params.item || {};
  const {
    id,
    name,
    category,
    hoursofOperation,
    bestTimeToVisit,
    tags,
    rating,
    description,
    images = [],
  } = spotti;

  return (
    <ScreenWrapper>
      <View style={styles.actionButtonsContainer}>
        <JobActionButtons />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        <ImageCarousel images={images} isFullView />
        <View style={styles.sectionContainer}>
          <JobOverview
            name={name}
            rating={rating}
            category={category}
            hoursofOperation={hoursofOperation}
            bestTimeToVisit={bestTimeToVisit}
            tags={tags}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Divider />
        </View>
        <View style={styles.sectionContainer}>
          <JobDescription description={description} />
        </View>
        <View style={styles.sectionContainer}></View>
      </ScrollView>
      <View style={{ marginBottom: insets.bottom }}>
        <GlowingButton
          buttonText={'Insights'}
          onPress={() => setIsModalVisible(true)}
        />
      </View>
      <SlideUpModal isVisible={isModalVisible} setVisible={setIsModalVisible}>
        <SpottiInsights spottiName={name} />
      </SlideUpModal>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  actionButtonsContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    zIndex: 1,
  },
  sectionContainer: {
    paddingTop: spacing.medium,
    paddingHorizontal: spacing.medium,
  },
});

export default React.memo(JobFullView);
