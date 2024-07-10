import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
      console.log("Review",token);
  
    const response = await axios.post('http://localhost:4000/api/reviews/feedback',)
    console.log("review",response);
    return response.data
  })

const ReviewSlice = createSlice({
    name: 'bookings',
    initialState,
    extraReducers: (builder) => {
        
    }
  })
  
  export default ReviewSlice.reducer;