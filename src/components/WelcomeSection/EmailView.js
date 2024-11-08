import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useKeyboardHeight } from '../../hooks/useKeyboardHeight';
import { MainStreetHireIcon } from '../../ui/MainStreetHireIcon';
import { colors, fontSize, iconSize, spacing, fonts } from '../../theme/theme';
import ScreenWrapper from '../ScreenWrapper';
import TextInputBox from '../../ui/TextInputBox';
import RoundActionButton from '../../ui/RoundActionButton';
import Button from '../../ui/Button';
import { ICONS } from '../../constants';
import { useDispatch } from 'react-redux';
import { setSignupInfo } from '../../redux/slices/authSlice';
import { checkEmailInUse } from '../../api/auth';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const keyboardHeight = useKeyboardHeight();

  const screenHeight = Dimensions.get('window').height;
  const calculatedHeight = Math.min(
    screenHeight - keyboardHeight - insets.top - spacing.xxxlarge,
    461 - spacing.xxxlarge
  );

  const handleContinueButton = async () => {
    // const emailIsInUse = await checkEmailInUse(email);
    if (true) {
      navigation.navigate('PasswordView', {
        // emailIsInUse: true,
        // email,
      });
    } else {
      dispatch(setSignupInfo({ email }));
      navigation.navigate('PasswordView', {
        isInUse: false,
      });
    }
  };

  return (
    <ScreenWrapper
      screenStyles={{
        paddingTop: insets.top,
        paddingHorizontal: spacing.xlarge,
      }}
    >
      <View
        style={[
          {
            height: calculatedHeight,
            justifyContent: 'space-between',
          },
        ]}
      >
        <RoundActionButton
          onIconPress={() => navigation.goBack()}
          iconName={ICONS.arrowLeft}
          iconSize={iconSize.medium}
          styling={{ alignItems: 'flex-start' }}
        />
        <View style={styles.iconAndTextContainer}>
          <MainStreetHireIcon size={iconSize.xxlarge} />
          <Text style={styles.text}>Let's start with email</Text>
        </View>
        <View>
          <TextInputBox
            value={email}
            onChangeText={setEmail}
            alwaysFocused={true}
            returnKey={'return'}
            labelText={'Email'}
            styling={{ paddingHorizontal: spacing.small }}
          />
          <Button
            onPress={handleContinueButton}
            buttonText={'Continue'}
            btnStyles={{ marginTop: spacing.xxxxxlarge }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  iconAndTextContainer: {
    alignItems: 'center',
  },
  text: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xxlarge,
    paddingTop: spacing.medium,
    fontFamily: fonts.regular,
  },
});

export default EmailSignup;
