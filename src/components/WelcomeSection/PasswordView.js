import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useKeyboardHeight } from '../../hooks/useKeyboardHeight';
import { colors, fontSize, iconSize, spacing, fonts } from '../../theme/theme';
import ScreenWrapper from '../ScreenWrapper';
import TextInputBox from '../../ui/TextInputBox';
import RoundActionButton from '../../ui/RoundActionButton';
import Button from '../../ui/Button';
import { ICONS } from '../../constants';
import { useDispatch } from 'react-redux';
import { setSignupInfo } from '../../redux/slices/authSlice';
import { handleSignin } from '../../services/authService';

const PasswordView = ({ route }) => {
  const { emailIsInUse, email } = route.params;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  const screenHeight = Dimensions.get('window').height;
  const keyboardHeight = useKeyboardHeight();
  const calculatedHeight = Math.min(
    screenHeight - keyboardHeight - insets.top - spacing.xxxlarge,
    461 - spacing.xxxlarge
  );

  const handleContinueButton = async () => {
    if (emailIsInUse) {
      try {
        setIsSubmitting(true);
        await handleSignin({ email, password }, dispatch, navigation);
      } catch (error) {
        console.error('Signin failed:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      dispatch(setSignupInfo({ password }));
      navigation.navigate('UsersNameView');
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
          <Text style={styles.text}>
            {emailIsInUse ? 'Welcome back' : 'Create a password'}
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
            styling={{ paddingHorizontal: spacing.small }}
          />
          <Button
            onPress={handleContinueButton}
            buttonText={
              isSubmitting
                ? 'Signing in...'
                : emailIsInUse
                  ? 'Sign in'
                  : 'Continue'
            }
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

export default PasswordView;
