// import { REACT_SPOTTI_API_URL } from '@env';
// import createApiClient from './createApiClient';

// const spottiApiClient = createApiClient(`${REACT_SPOTTI_API_URL}/spottis`);

// export const getPaginatedSpottis = async (limit = 10, offset = 0) => {
//   try {
//     const response = await spottiApiClient.get('', {
//       params: {
//         limit,
//         offset,
//       },
//       headers: {
//         'Cache-Control': 'no-cache, no-store, must-revalidate', // HTTP 1.1
//         Pragma: 'no-cache', // HTTP 1.0
//         Expires: '0', // Proxies
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching paginated Spottis:', error);
//     throw error;
//   }
// };
