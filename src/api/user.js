import axios from 'axios';
import { REACT_USER_API_URL } from '@env';

export default axios.create({
  baseURL: `${REACT_USER_API_URL}/users`,
});
