import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/users/user-profile';

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
