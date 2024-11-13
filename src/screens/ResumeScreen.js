import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { borderRadius, colors, spacing } from '../theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import ActionButton from '../ui/ActionButton';
import { ICONS } from '../constants';
import { shadowRadius } from '../theme/theme';
import Resume from '../components/ResumeSection/Resume';
import ResumeBuilderModal from '../components/ResumeSection/ResumeBuilderFlow';
import { RESUME_DATA } from '../development-entities';

const ResumeScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const [isModalVisible, setModalVisible] = useState(false);

  const insets = useSafeAreaInsets();
  const { firstName, lastName } = useSelector((state) => state.user);

  return (
    <ScreenWrapper
      screenStyles={{ paddingTop: insets.top, justifyContent: 'space-between' }}
    >
      <View style={styles.container}>
        <Resume data={RESUME_DATA} />
        <ResumeBuilderModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
      <View style={styles.builderButtonContainer}>
        <ActionButton
          onPress={() => setModalVisible(true)}
          buttonText={'Resume Builder'}
          rightIcon={ICONS.wrench}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.large,
    borderWidth: 0.25,
    borderColor: colors.darkGray,
    borderRadius: borderRadius.medium,
    flex: 1,
    backgroundColor: '#041112',
    shadowColor: colors.shadowEffectBlack,
    shadowOffset: { width: -0.75, height: 0.75 },
    shadowOpacity: 0.3,
    shadowRadius: shadowRadius.small,
  },
  builderButtonContainer: {
    alignItems: 'center',
    paddingVertical: spacing.large,
  },
});

export default ResumeScreen;
