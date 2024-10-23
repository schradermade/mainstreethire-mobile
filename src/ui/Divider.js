import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../theme/theme';

const Divider = ({ marginT = 0, marginB = 0 }) => {
  return (
    <View
      style={[styles.divider, { marginTop: marginT, marginBottom: marginB }]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 0.17, // Use borderBottomWidth to achieve an exact 0.2 height line
    borderBottomColor: colors.borderColorDark || 'black', // Color for the border
    paddingVertical: 0.5,
  },
});

export default Divider;
