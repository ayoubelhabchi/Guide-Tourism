import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    loading: false,
    campings: [],
    campingID: [],
    error: '',
}

export const fetchCampings = createAsyncThunk('campings/fetchCampings', async ()  => {
    const token = localStorage.getItem('token') || null;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(token);

    const response = await axios.get('http://localhost:4000/api/camping/show',config)
    return response.data;
})

export const fetchCampingsById = createAsyncThunk('users/fetchCampingsById',async (campingId) => {

    const token = localStorage.getItem('token') || null;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(`http://localhost:4000/api/camping/get/${campingId}`,config);
          console.log("data",response);
      return response.data;
    }
  )

const campingSlice = createSlice({
    name: 'campings',
    initialState,
    reducers: {
      resetCampingID: (state) => {
          state.campingID = [];
      }
  },
    extraReducers: (builder) => {
        builder.addCase(fetchCampings.pending, (state) => {
            state.loading = true;
        });
    
        builder.addCase(fetchCampings.fulfilled, (state, action) => {
            state.loading = false;
            state.campings = action.payload;
            console.log("campings", state.campings);
            state.error = '';
        });
    
        builder.addCase(fetchCampings.rejected, (state, action) => {
            state.loading = false;
            state.campings = [];
            state.error = action.error.message;
        });

        builder.addCase(fetchCampingsById.fulfilled, (state, action) => {
            state.loading = false;
            state.campingID = action.payload; 
            state.error = '';
          });
    }
})

export const { resetCampingID } = campingSlice.actions;
export default campingSlice.reducer;