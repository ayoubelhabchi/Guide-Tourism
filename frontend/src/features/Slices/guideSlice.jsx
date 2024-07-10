import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    guideTours: [],
    getTour: [],
    error: '',
}


export const fetchTours = createAsyncThunk('tours/fetchTours', async ()  => {
    const token = localStorage.getItem('token') || null;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(token);

    const response = await axios.get('http://localhost:4000/api/tours/allTours',config)
    return response.data;
})

export const createTours = createAsyncThunk('tours/createTours', async (formData)  => {
    const token = localStorage.getItem('token') || null;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(token);

    const response = await axios.post('http://localhost:4000/api/tours/create',formData,config)
    console.log("jjjj",response);
    return response.data;
})

export const fetchToursById = createAsyncThunk('tours/fetchToursById',async (id) => {

    const token = localStorage.getItem('token') || null;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(`http://localhost:4000/api/tours/getTour/${id}`,config);
      console.log("id", id);
      console.log("dataTour",response);
      return response.data;

    }
  )
export const fetchUpdateTour = createAsyncThunk('tours/fetchUpdateTour',async ({data, id}) => {
    console.log("Hdhbdhc",id);

    const token = localStorage.getItem('token') || null;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try{
          const response = await axios.put(`http://localhost:4000/api/tours/updateTour/${id}`,data,config);
      console.log("fetchUpdateTour", id);
      console.log("fetchUpdateTour",response);
      return response.data;
      }

 catch (error) {
    console.error('Error updating tour:', error);
    throw error;
  }
});

const guideSlice = createSlice({
    name: 'tours',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(fetchTours.pending, (state) => {
            state.loading = true;
        });
    
        builder.addCase(fetchTours.fulfilled, (state, action) => {
            state.loading = false;
            state.guideTours = action.payload;
            console.log("guideTours", state.guideTours);
            state.error = '';
        });
    
        builder.addCase(fetchTours.rejected, (state, action) => {
            state.loading = false;
            state.guideTours = [];
            state.error = action.error.message;
        });
      

        builder.addCase(fetchToursById.fulfilled, (state, action) => {
            state.loading = false;
            state.getTour = action.payload; 
            console.log("getTour",state.getTour);
            state.error = '';
            
          });
          builder.addCase(fetchUpdateTour.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchUpdateTour.fulfilled, (state, action) => {
            state.loading = false;
            // Update the specific tour in state
            state.getTour = action.payload; 
            console.log("Updated tour:", state.getTour);
            state.error = '';
        });

        builder.addCase(fetchUpdateTour.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default guideSlice.reducer;