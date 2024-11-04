import axios from 'axios';
import { EXPO_SPOTTI_API_URL } from '@env';
import axiosRetry from 'axios-retry';
import { getAccessToken } from '../utils/authHelpers';
// import { getTravelCompletion } from './openAi';

const apiClient = axios.create({
  baseURL: `${EXPO_SPOTTI_API_URL}/spottis`,
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
    const accessToken = await getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  } catch (error) {
    console.error('Error adding Authorization header:', error);
  }
  return config;
});

export const getPaginatedSpottis = async (limit = 10, offset = 0) => {
  try {
    const response = await apiClient.get('', {
      params: {
        limit,
        offset,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching paginated Spottis:', error);
    throw error;
  }
};
