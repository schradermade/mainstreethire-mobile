import * as SecureStorage from 'expo-secure-store';

let cachedAccessToken = null;

export const storeAccessToken = async (accessToken) => {
  cachedAccessToken = accessToken;
  try {
    await SecureStorage.setItemAsync('accessToken', accessToken);
  } catch (error) {
    console.error('Error storing access token:', error);
  }
};

export const getAccessToken = async () => {
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

export const deleteAccessToken = async () => {
  cachedAccessToken = null;
  try {
    await SecureStorage.deleteItemAsync('accessToken');
    console.log('Access token deleted');
  } catch (error) {
    console.error('Error deleting access token:', error);
  }
};
