import { REACT_USER_API_URL } from '@env';
import createApiClient from './createApiClient';

const userApiClient = createApiClient(`${REACT_USER_API_URL}/users`);
