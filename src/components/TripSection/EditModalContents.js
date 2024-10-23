import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { borderWidth, colors, fontSize, spacing } from '../../theme/theme';
import TextInputBox from '../../ui/TextInputBox';

const EditModalContents = ({ tripName }) => {
  const [newTripName, setNewTripName] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.editTripText}>Edit trip</Text>
        <TextInputBox
          value={newTripName}
          onChangeText={setNewTripName}
          placeholder={tripName}
          placeholderTextColor={colors.placeholderText}
          returnKeyType="done"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          labelText={'Trip name'}
          styling={{ marginTop: spacing.medium }}
          colorTheme="dark"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  editTripText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xxlarge,
    marginTop: spacing.xxxxxlarge,
  },
  focusedInput: {
    borderColor: colors.borderColorLight,
    borderWidth: borderWidth.medium,
  },
});

export default EditModalContents;
