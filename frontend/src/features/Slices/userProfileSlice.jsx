import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { config } from '../../tools/config/config';

const renderApi = config.Render_Url

const initialState = {
    loading: false,
    profile: [],
    error: '',
}

export const fetchProfile = createAsyncThunk('users/fetchProfile', async ()  => {
  const token = localStorage.getItem('token') || null;

  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // console.log(token);

  const response = await axios.get(`${renderApi}/api/users/user-profile`,config)
  return response.data
})

export const updateProfile = createAsyncThunk('users/updateProfile', async (updatedFormData, thunkAPI) => {
  const token = localStorage.getItem('token') || null;
  let userID = thunkAPI.getState().users.profile.data?.user?.id || thunkAPI.getState().users.profile._id;
// console.log("id",userID);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      
    },
  };

  try {
    const response = await axios.put(`${renderApi}/api/users/update/${userID}`, updatedFormData, config);

    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
});

export const switchProfile = createAsyncThunk('users/switchProfile', async (data, thunkAPI) => {
  const token = localStorage.getItem('token') || null;
  const userID = thunkAPI.getState().users.profile._id;
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.put(`${renderApi}/api/users/switch-profile/${userID}`, data, config);
    console.log("switch",response);

    return response.data;
  } catch (error) {
    console.error('Error switchProfile user:', error);
    throw error;
  }
});


const UserProfileSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
      builder.addCase(fetchProfile.pending, (state) => {
          state.loading = true;
      });
  
      builder.addCase(fetchProfile.fulfilled, (state, action) => {
          state.loading = false;
          state.profile = action.payload;
          state.error = '';
      });
  
      builder.addCase(fetchProfile.rejected, (state, action) => {
          state.loading = false;
          state.profile = [];
          state.error = action.error.message;
      });
        
      
  }
})

export default UserProfileSlice.reducer;