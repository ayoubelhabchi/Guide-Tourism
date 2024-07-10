import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    loading: false,
    orders: [],
    error: '',
}

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async ()  => {
    const token = localStorage.getItem('token') || null;
  
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      // console.log(token);
  
    const response = await axios.get('http://localhost:4000/api/users/myorders',config)
    // console.log("ordrs",response);
    return response.data
  })

  const OrdersSlice = createSlice({
    name: 'orders',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state) => {
            state.loading = true;
        });
    
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.orders = action.payload;
            state.error = '';
        });
    
        builder.addCase(fetchOrders.rejected, (state, action) => {
            state.loading = false;
            state.orders = [];
            state.error = action.error.message;
        });
          
        
    }
  })
  
  export default OrdersSlice.reducer;