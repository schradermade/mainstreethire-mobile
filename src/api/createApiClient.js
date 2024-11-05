import axios from 'axios';
import axiosRetry from 'axios-retry';
import { getAccessToken } from '../utils/authHelpers';

// Create an instance of axios
const createApiClient = (baseURL) => {
  const apiClient = axios.create({
    baseURL,
  });

  // Configure axios-retry to handle retries
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

  // Add an authorization interceptor to include the access token in headers
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

  return apiClient;
};

export default createApiClient;
