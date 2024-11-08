import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { spacing, iconSize } from '../theme/theme';
import { IconAndSlogan } from '../ui/IconAndSlogan';
import ScreenWrapper from '../components/ScreenWrapper';
import Button from '../ui/Button';
import LEGAL_DISCLAIMER from '../utils/legalDisclaimer';

const WelcomeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <ScreenWrapper
      screenStyles={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: spacing.xlarge,
      }}
    >
      <View style={styles.welcomeMessageContainer}>
        <IconAndSlogan size={iconSize.large} showSlogan />
      </View>
      <Button
        onPress={() => navigation.navigate('EmailView')}
        buttonText={'Continue with email'}
        btnStyles={styles.continueEmailButton}
      />
      <LEGAL_DISCLAIMER />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  welcomeMessageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: spacing.xxxxxlarge,
  },
  continueEmailButton: {
    paddingBottom: spacing.xxxxxlarge,
  },
});

export default WelcomeScreen;
