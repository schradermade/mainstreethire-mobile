import axios from 'axios';
import axiosRetry from 'axios-retry';
import * as SecureStorage from 'expo-secure-store';
import { REACT_APP_AUTH_API_URL } from '@env';

let cachedAccessToken = null;

// api client setup with axios
const apiClient = axios.create({
  baseURL: REACT_APP_AUTH_API_URL,
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

export const storeAccessToken = async (accessToken) => {
  cachedAccessToken = accessToken;
  try {
    await SecureStorage.setItemAsync('accessToken', accessToken);
  } catch (error) {
    console.error('Error storing access token:', error);
  }
};

const getAccessToken = async () => {
  if (cachedAccessToken) {
    return cachedAccessToken;
  }

  try {
    const token = await SecureStorage.getItemAsync('accessToken');
    cachedAccessToken = token;
    return token;
  } catch (error) {
    console.error('Error retrieving accessToken:', error);
    return null;
  }
};

const deleteAccessToken = async () => {
  cachedAccessToken = null;
  try {
    await SecureStorage.deleteItemAsync('accessToken');
    console.log('Access token deleted');
  } catch (error) {
    console.error('Error deleting access token:', error);
  }
};
