import connectionInstance from '../connection-instance';

const profileService = {
  getProfile: () => {
    return connectionInstance.get('profile/me');
  },
  updateProfile: body => {
    return connectionInstance.patch('profile/me', body);
  },
};

export default profileService;
