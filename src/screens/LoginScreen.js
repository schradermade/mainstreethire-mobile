import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Button from "../ui/Button";
import LEGAL_DISCLAIMER from "../utils/legalDisclaimer";
import { BOTTOM_TAB_ICONS, HOTSPOTTI_NAME, HOTSPOTTI_SLOGAN } from "../constants";
import { colors, fontSize, iconSize, spacing } from "../theme/theme";

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(true);
  }

  const innerIcon = () => (
    <MaterialCommunityIcons
      name={BOTTOM_TAB_ICONS['Spottis'].name} 
      style={styles.innerIcon} 
      size={iconSize.large}
    />
  )

  return (
    <View style={styles.container}>
      <View style={styles.welcomeMessageContainer}>
        <Text 
          style={styles.iconText}
        >
          {HOTSPOTTI_NAME[0]}
          {innerIcon()}
          {HOTSPOTTI_NAME[1]}
        </Text>
        <Text style={styles.iconSubText}>{HOTSPOTTI_SLOGAN}</Text>
      </View>
      <Button
        onPress={handleLogin}
        buttonText={'Continue with email'}
        btnStyles={styles.continueEmailButton}
      />
      <LEGAL_DISCLAIMER />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: spacing.xlarge
  },
  welcomeMessageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: spacing.xxxxlarge
  },
  iconWrapper: {
    color: colors.spottiDark,
    marginBottom: spacing.small
  },
  iconText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xxxlarge,
    textAlign: 'center',
  },
  iconSubText: {
    fontSize: fontSize.large,
    color: colors.darkFont,
    marginTop: spacing.small
  },
  continueEmailButton: {
    paddingBottom: spacing.xxxxlarge
  },
  innerIcon: {
    color: colors.spottiDark,
  }
})

export default LoginScreen;
