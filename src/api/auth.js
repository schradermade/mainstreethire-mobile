import axios from 'axios';
import axiosRetry from 'axios-retry';
import { REACT_APP_AUTH_API_URL } from '@env';
import { storeAccessToken, getAccessToken } from '../utils/authHelpers';

// api client setup with axios
const apiClient = axios.create({
  baseURL: `${REACT_APP_AUTH_API_URL}/auth`,
  timeout: 5000,
});

axiosRetry(apiClient, {
  retries: 3,
  retryDelay: (retryCount) => {
    return axiosRetry.exponentialDelay(retryCount);
  },
  retryCondition: (error) => {
    return (
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      error.response?.status === 503
    );
  },
});

// interceptor to attach the token to every request
apiClient.interceptors.request.use(async (config) => {
  try {
    const accessToken = await getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  } catch (error) {
    console.error('Error adding Authorization header:', error);
  }
  return config;
});

// Sign-up user
export const signupUser = async (userData) => {
  try {
    const response = await apiClient.post('/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

// Sign-in user
export const signinUser = async (email, password) => {
  try {
    const response = await apiClient.post('/signin', { email, password });
    const { accessToken } = response.data;

    await storeAccessToken(accessToken);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error during signin:', error.response.data); // Capture the error response from server
      console.error('Status:', error.response.status); // Check the HTTP status code
    } else {
      console.error('Signin error without response:', error.message); // Fallback for unknown errors
    }
    throw error;
  }
};

// check if email is in use
export const checkEmailInUse = async (email) => {
  try {
    const { data } = await apiClient.get(`/check-email`, {
      params: { email },
    });
    return data.emailInUse;
  } catch (error) {
    console.error(error);
    return false;
  }
};
