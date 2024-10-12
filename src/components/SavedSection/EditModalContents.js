import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { borderWidth, colors, fontSize, spacing } from "../../theme/theme";

const EditModalContents = ({ listName }) => {
  const [newListName, setNewListName] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container]}>
          <Text style={styles.editListText}>Edit list</Text>
          <Text style={styles.listNameText}>List name</Text>
          <TextInput 
            style={[styles.inputText, isFocused && styles.focusedInput]}
            value={newListName}
            onChangeText={setNewListName}
            placeholder={listName}
            placeholderTextColor={colors.placeholderText}
            returnKeyType="done"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
      </View>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  editListText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xxlarge,
    marginTop: spacing.xxxxlarge
  },
  listNameText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.medium,
    marginTop: spacing.xxxlarge
  },
  inputText: {
    marginTop: spacing.medium,
    padding: spacing.small,
    borderRadius: 5,
    color: colors.offWhiteFont,
    fontSize: fontSize.large,
    backgroundColor: colors.secondaryColor,
    height: 50
  },
  focusedInput: {
    borderColor: colors.borderColorLight,
    borderWidth: borderWidth.medium,
  }
});

export default EditModalContents;