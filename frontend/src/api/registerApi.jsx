
import axios from 'axios';

const registerUser = async (formData) => {
  try {
    const response = await axios.post("http://localhost:4000/api/auth/register", formData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, error };
  }
};

export default registerUser;
