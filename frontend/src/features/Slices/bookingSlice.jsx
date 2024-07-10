import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    loading: false,
    book: [],
    profile: [],
    checkoutUrl: null,
    error: '',
}


export const Booking = createAsyncThunk('bookings/Booking', async ({ tourId,campingId, userId, amount })  => {
    const token = localStorage.getItem('token') || null;
  
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("booking",token);
  
    const response = await axios.post('http://localhost:4000/api/booking/book',{
      userId,
      tourId,
      campingId,
      amount
    })
    console.log("Booking",response);
    return response.data
  })

  export const fetchProfile = createAsyncThunk('bookings/fetchProfile', async ()  => {
    const token = localStorage.getItem('token') || null;
  
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(token);
  
    const response = await axios.get('http://localhost:4000/api/users/user-profile',config)
    console.log("profile booking",response);
    return response.data
  })

  const BookingSlice = createSlice({
    name: 'bookings',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(Booking.pending, (state) => {
            state.loading = true;
        });
    
        builder.addCase(Booking.fulfilled, (state, action) => {
            state.loading = false;
            state.checkoutUrl = action.payload.url;
            state.error = '';
        });
    
        builder.addCase(Booking.rejected, (state, action) => {
            state.loading = false;
            state.book = [];
            state.error = action.error.message;
        });
          
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
  
  export default BookingSlice.reducer;