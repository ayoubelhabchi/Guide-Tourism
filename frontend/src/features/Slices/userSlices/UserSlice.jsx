import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import profileApi from '../../../api/profileApi';

export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async ({ token }, thunkAPI) => {
    try {
      const userProfile = await profileApi.getUserProfile(token);
      return userProfile;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
