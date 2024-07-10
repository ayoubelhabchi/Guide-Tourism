// api/login.js

import axios from 'axios';

const loginApi = async (formData) => {
  try {
    const response = await axios.post("http://localhost:4000/api/auth/login", formData);
    const token = response.data.token;
    console.log("token",token);
    localStorage.setItem("token", token);
    return { success: true, token: token };
  } catch (error) {
    console.error("Error logging in:", error);
    return { success: false, error: error.response.data.message || 'An error occurred while logging in' };
  }
};


export default loginApi;
