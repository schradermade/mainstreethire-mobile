import axios from 'axios';
import { REACT_APP_SPOTTI_API_URL } from '@env';

export default axios.create({
  baseURL: REACT_APP_SPOTTI_API_URL,
});
