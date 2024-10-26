import { useDispatch, useSelector } from 'react-redux';
import { setSignupInfo } from '../redux/slices/authSlice';

export const useSignupForm = () => {
  const dispatch = useDispatch();

  const { email, password, firstName, lastName } = useSelector(
    (state) => state.auth
  );

  const handleChange = (key, value) => {
    dispatch(setSignupInfo({ [key]: value }));
  };

  return {
    email,
    password,
    firstName,
    lastName,
    handleChange,
  };
};
