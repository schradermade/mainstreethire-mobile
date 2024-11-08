// import { REACT_AUTH_API_URL } from '@env';
// import { storeAccessToken } from '../utils/authHelpers';
// import createApiClient from './createApiClient';

// const authApiClient = createApiClient(`${REACT_AUTH_API_URL}/auth`);

// // Sign-up user
// export const signupUser = async (userData) => {
//   try {
//     const response = await authApiClient.post('/signup', userData);
//     return response.data;
//   } catch (error) {
//     console.error('Error during signup:', error);
//     throw error;
//   }
// };

// // Sign-in user
// export const signinUser = async (email, password) => {
//   try {
//     const response = await authApiClient.post('/signin', { email, password });
//     const { accessToken } = response.data;

//     await storeAccessToken(accessToken);

//     return response.data;
//   } catch (error) {
//     if (error.response) {
//       console.error('Error during signin:', error.response.data); // Capture the error response from server
//       console.error('Status:', error.response.status); // Check the HTTP status code
//     } else {
//       console.error('Signin error without response:', error.message); // Fallback for unknown errors
//     }
//     throw error;
//   }
// };

// // check if email is in use
// export const checkEmailInUse = async (email) => {
//   try {
//     const { data } = await authApiClient.get(`/check-email`, {
//       params: { email },
//     });
//     return data.emailInUse;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// };
