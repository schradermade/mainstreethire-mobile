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
import { useSignupForm } from '../../hooks/useSignupForm';
import { handleSignup } from '../../services/authService';

const UsersNameView = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const { email, password, firstName, lastName, handleChange } =
    useSignupForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const screenHeight = Dimensions.get('window').height;
  const keyboardHeight = useKeyboardHeight();
  const calculatedHeight = Math.min(
    screenHeight - keyboardHeight - insets.top - spacing.xxxlarge,
    461 - spacing.xxxlarge
  );

  const handleFormSubmit = async () => {
    try {
      setIsSubmitting(true);
      await handleSignup(
        { email, password, firstName, lastName },
        dispatch,
        navigation
      );
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setIsSubmitting(false);
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
          <Text style={styles.text}>Enter your name</Text>
        </View>
        <View>
          <TextInputBox
            value={firstName}
            onChangeText={(value) => handleChange('firstName', value)}
            alwaysFocused={true}
            returnKey={'return'}
            labelText={'First name'}
            styling={{ paddingHorizontal: spacing.small }}
          />
          <TextInputBox
            value={lastName}
            onChangeText={(value) => handleChange('lastName', value)}
            alwaysFocused={true}
            returnKey={'done'}
            labelText={'Last name'}
            styling={{
              paddingHorizontal: spacing.small,
              paddingTop: spacing.xxlarge,
            }}
          />
          <Button
            onPress={handleFormSubmit}
            buttonText={isSubmitting ? 'Signing up...' : 'Sign up'}
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

export default UsersNameView;
