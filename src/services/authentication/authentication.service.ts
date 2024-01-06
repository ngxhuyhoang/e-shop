import connectionInstance from '../connection-instance';
import { FetchApiResponse } from '../types';
import { ILoginResponse } from './types';

const authenticationService = {
  login: (firebaseToken: string): FetchApiResponse<ILoginResponse> => {
    return connectionInstance.post('auth/login', { firebaseToken });
  },
  logout: () => {
    return connectionInstance.post('auth/logout');
  },
  refreshToken: (refreshToken: string): FetchApiResponse<ILoginResponse> => {
    return connectionInstance.post('auth/refresh-token', { refreshToken });
  },
};

export default authenticationService;
