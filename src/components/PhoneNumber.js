import React from 'react';
import { Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts, fontSize } from '../theme/theme';

const PhoneNumber = ({ phone }) => {
  const handlePress = () => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.phoneNumber}>{phone}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  phoneNumber: {
    color: colors.linkBlue,
    fontSize: fontSize.xlarge,
    fontFamily: fonts.regular,
  },
});

export default PhoneNumber;
