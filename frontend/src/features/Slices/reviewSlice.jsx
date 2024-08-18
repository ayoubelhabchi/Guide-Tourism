import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { config } from '../../tools/config/config';

const renderApi = config.Render_Url

const initialState = {
    loading: false,
    error: '',
}

export const LeaveReview = createAsyncThunk('reviews/Review', async ()  => {
    const token = localStorage.getItem('token') || null;
  
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
    const response = await axios.post(`${renderApi}/api/reviews/feedback`,)
    return response.data
  })

const ReviewSlice = createSlice({
    name: 'bookings',
    initialState,
    extraReducers: (builder) => {
        
    }
  })
  
  export default ReviewSlice.reducer;