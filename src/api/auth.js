import axios from 'axios';
import axiosRetry from 'axios-retry';
import * as SecureStorage from 'expo-secure-store';
import { REACT_APP_AUTH_API_URL } from '@env';

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

apiClient.interceptors.request.use(async (config) => {
  try {
    const accessToken = await getAccessToken('authToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  } catch (error) {
    console.error('Error adding Authorization header:', error);
  }
  return config;
});

export const signupUser = async (userData) => {
  try {
    const response = await apiClient.post('/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

export const signinUser = async (email, password) => {
  try {
    const response = await apiClient.post('/signin', { email, password });
    const { accessToken } = response.data;

    await saveAccessToken('authToken', accessToken);
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

let cachedAccessToken = null;

const getAccessToken = async (key) => {
  if (!cachedAccessToken) {
    try {
      cachedAccessToken = await SecureStorage.getItemAsync(key);
    } catch (error) {
      console.error('Error retrieving accessToken:', error);
    }
  }
  return cachedAccessToken;
};

const saveAccessToken = async (key, value) => {
  cachedAccessToken = value;
  try {
    await SecureStorage.setItemAsync(key, value);
  } catch (error) {
    console.error('Error saving accessToken:', error);
  }
};
