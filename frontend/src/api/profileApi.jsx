import axios from 'axios';

import { config } from '../../tools/config/config';

const renderApi = config.Render_Url

const BASE_URL = `${renderApi}/api/users/user-profile`;

const profileApi = {
  getUserProfile: async (token) => {
    return axios.get(`${BASE_URL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => response.data);
  },
};

export default profileApi;
