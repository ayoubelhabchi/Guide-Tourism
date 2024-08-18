// api/login.js

import { config } from '../tools/config/config';
const renderApi = config.Render_Url

import axios from 'axios';

const loginApi = async (formData) => {
  try {
    const response = await axios.post(`${renderApi}/api/auth/login`, formData);
    const token = response.data.token;
    // console.log("token",token);
    localStorage.setItem("token", token);
    return { success: true, token: token };
  } catch (error) {
    console.error("Error logging in:", error);
    return { success: false, error: error.response.data.message || 'An error occurred while logging in' };
  }
};


export default loginApi;
