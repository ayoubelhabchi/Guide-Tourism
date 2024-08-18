// guideSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { config } from '../../tools/config/config';

const renderApi = config.Render_Url

const initialState = {
  loading: false,
  guideInfo: [],
  error: '',
};

export const fetchGuideInfo = createAsyncThunk('guide/fetchGuideInfo', async () => {
  const token = localStorage.getItem('token') || null;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${renderApi}/api/users/user-profile`, config);
  return response.data.data;
});

const infoguideSlice = createSlice({
  name: 'guide',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGuideInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGuideInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.guideInfo = action.payload;
      state.error = '';
    });
    builder.addCase(fetchGuideInfo.rejected, (state, action) => {
      state.loading = false;
      state.guideInfo = null;
      state.error = action.error.message;
    });
  },
});

export default infoguideSlice.reducer;
