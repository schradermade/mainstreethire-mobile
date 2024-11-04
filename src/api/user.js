import axios from 'axios';
import { EXPO_USER_API_URL } from '@env';

export default axios.create({
  baseURL: `${EXPO_USER_API_URL}/users`,
});
