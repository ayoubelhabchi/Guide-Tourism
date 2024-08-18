
import axios from 'axios';
import { config } from '../tools/config/config';

const renderApi = config.Render_Url

const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${renderApi}/api/auth/register`, formData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, error };
  }
};

export default registerUser;
