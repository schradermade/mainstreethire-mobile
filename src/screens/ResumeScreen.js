import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { spacing } from '../theme/theme';
import ProfileActionButtons from '../components/ResumeSection/ProfileActionButtons';
import UserProfileSummary from '../components/ResumeSection/UserProfileSummary';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const { firstName, lastName } = useSelector((state) => state.user);

  return (
    <ScreenWrapper screenStyles={{ paddingTop: insets.top }}>
      <View style={styles.container}>
        <ProfileActionButtons />
        <UserProfileSummary firstName={firstName} lastName={lastName} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.large,
    marginHorizontal: spacing.xxlarge,
  },
});

export default ProfileScreen;
