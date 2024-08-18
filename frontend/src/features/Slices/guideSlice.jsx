import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../tools/config/config';

const renderApi = config.Render_Url

const initialState = {
    loading: false,
    guideTours: [],
    getTour: [],
    error: '',
}


export const fetchTours = createAsyncThunk('tours/fetchTours', async (__,thunkAPI) => {
  const guideId = thunkAPI.getState().guideInfo?.guideInfo?.guide?.id
    const token = localStorage.getItem('token') || null;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(token);
    const response = await axios.post(`${renderApi}/api/tours/allGuideTours`,{guideId},config)
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

    const response = await axios.post(`${renderApi}/api/tours/create`,formData,config)
    return response.data;
})

export const fetchToursById = createAsyncThunk('tours/fetchToursById',async (id) => {

    const token = localStorage.getItem('token') || null;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(`${renderApi}/api/tours/getTour/${id}`,config);
      console.log("id", id);
      console.log("dataTour",response);
      return response.data;

    }
  )
export const fetchUpdateTour = createAsyncThunk('tours/fetchUpdateTour',async ({data, id}) => {

    const token = localStorage.getItem('token') || null;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try{
          const response = await axios.put(`${renderApi}/api/tours/updateTour/${id}`,data,config);

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
            state.tourCount = action.payload.length;
            // console.log("guideTours", state.guideTours);
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
            state.error = '';
            
          });
          builder.addCase(fetchUpdateTour.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchUpdateTour.fulfilled, (state, action) => {
            state.loading = false;
            state.getTour = action.payload; 
            state.error = '';
        });

        builder.addCase(fetchUpdateTour.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default guideSlice.reducer;