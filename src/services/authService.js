import { signupUser, signinUser } from '../api/auth';
import { setAccessToken, clearLoginInfo } from '../redux/slices/authSlice';
import { setUserInfo } from '../redux/slices/userSlice';

export const handleSignup = async (
  { email, password, firstName, lastName },
  dispatch,
  navigation
) => {
  try {
    const response = await signupUser({
      email,
      password,
      firstName,
      lastName,
    });

    dispatch(
      setUserInfo({
        email: response.user.email,
        firstName: response.user.firstName,
        lastName: response.user.lastName,
      })
    );
    dispatch(setAccessToken(response.accessToken));
    dispatch(clearLoginInfo());

    navigation.navigate('TabsNavigator');
  } catch (error) {
    console.error('Signup failed:', error);
    alert('Signup failed. Please try again.');
  }
};

export const handleSignin = async (
  { email, password },
  dispatch,
  navigation
) => {
  try {
    const response = await signinUser(email, password);
    dispatch(
      setUserInfo({
        email: response.user.email,
        firstName: response.user.firstName,
        lastName: response.user.lastName,
      })
    );
    dispatch(setAccessToken(response.accessToken));
    dispatch(clearLoginInfo());

    navigation.navigate('TabsNavigator');
  } catch (error) {
    console.error('Signin failed:', error);
    alert('Signin failed. Please try again.');
  }
};
