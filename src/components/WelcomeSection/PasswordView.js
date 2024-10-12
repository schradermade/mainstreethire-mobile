import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useKeyboardHeight } from "../../hooks/useKeyboardHeight";
import { colors, fontSize, iconSize, spacing } from "../../theme/theme";
import ScreenWrapper from "../ScreenWrapper";
import TextInputBox from "../../ui/TextInputBox";
import RoundActionButton from "../../ui/RoundActionButton";
import Button from "../../ui/Button";

const PasswordView = () => {
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get('window').height;
  const keyboardHeight = useKeyboardHeight();
  const calculatedHeight = Math.min(
    screenHeight - keyboardHeight - insets.top - spacing.xxxlarge,
    461 - spacing.xxxlarge
  );

  return (
    <ScreenWrapper
      screenStyles={{
        paddingHorizontal: spacing.xlarge,
      }}
    >
      <View style={[{
          height: calculatedHeight, 
          justifyContent: 'space-between'
        }]}
      >
        <RoundActionButton
          onIconPress={() => navigation.goBack()}
          iconName='arrow-left'
          iconSize={iconSize.large}
          styling={{alignItems: 'flex-start'}}
        />
        <View style={styles.iconAndTextContainer}>
          <Text style={styles.text}>
            Create a password
          </Text>
        </View>
        <View>
          <TextInputBox
            isPassword
            value={password}
            onChangeText={setPassword}
            alwaysFocused={true}
            returnKey={'return'}
            labelText={'Password'}
            styling={{paddingHorizontal: spacing.small}}
          />
          <Button
            onPress={() => navigation.navigate('UsersNameView')}
            buttonText={'Continue'}
            btnStyles={{marginTop: spacing.xxxxlarge}}
          />
        </View>
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  iconAndTextContainer: {
    alignItems: 'center',
  },
  text: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xxlarge,
    paddingTop: spacing.medium
  }
})

export default PasswordView;