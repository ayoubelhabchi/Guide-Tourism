import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


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
    console.log(token);

  const response = await axios.get('http://localhost:4000/api/users/user-profile',config)
  console.log("data",response);
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
    const response = await axios.put(`http://localhost:4000/api/users/update/${userID}`, updatedFormData, config);
    console.log("put",response);

    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
});

export const switchProfile = createAsyncThunk('users/switchProfile', async (data, thunkAPI) => {
  const token = localStorage.getItem('token') || null;
  const userID = thunkAPI.getState().users.profile._id;
console.log("data switch",data);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.put(`http://localhost:4000/api/users/switch-profile/${userID}`, data, config);
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