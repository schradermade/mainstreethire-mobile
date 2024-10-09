import React from 'react';
import { Text, Linking, StyleSheet, View } from 'react-native';
import { colors, fontSize } from '../theme/theme';

const LEGAL_DISCLAIMER = () => {
  return (
    <View>
      <Text
        style={styles.text}
        adjustsFontSizeToFit={true}
        numberOfLines={3}
      >
        By continuing to use HotSpotti, you agree to our{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://google.com')}>
          Terms of Service{'\n'}
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://google.com')}>
          Privacy Policy
        </Text>
        . Personal data added to HotSpotti is public by default - refer to our{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://google.com')}>
          Privacy FAQ
        </Text>{' '}
        to make changes.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
  },
  text: {
    color: colors.darkFont,
    textAlign: 'center',
    lineHeight: fontSize.medium,
  },
});

export default LEGAL_DISCLAIMER;
