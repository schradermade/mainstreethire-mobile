import React, { useEffect, useRef } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { ICONS } from '../constants';
import { colors, spacing } from '../theme/theme';

const LoadingSpinner = ({ label }) => {
  const spinAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000, // Duration for a full rotation
        useNativeDriver: true,
      })
    );
    spin.start();
  }, [spinAnim]);

  // Interpolate the spin animation to rotate from 0 to 360 degrees
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <MaterialCommunityIcons
          name={ICONS.loading}
          size={30}
          color={colors.offWhiteFont}
        />
      </Animated.View>
      <Text style={styles.labelText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    color: colors.offWhiteFont,
    paddingTop: spacing.small,
  },
});

export default LoadingSpinner;
