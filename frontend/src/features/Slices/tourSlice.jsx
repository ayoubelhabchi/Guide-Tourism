import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    loading: false,
    cartTour:[],
    cartTourBuId:[],
    guideIds:[],
    guideProfile:[],
    error: '',
}


export const fetchCardTours = createAsyncThunk('tours/fetchCardTours', async ()  => {
    const token = localStorage.getItem('token') || null;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    //   console.log(token);

    const response = await axios.get('http://localhost:4000/api/tours/allTours',config)
    // console.log("data",response);
    return response.data;
})

export const fetchCardToursById = createAsyncThunk('tours/fetchCardToursById', async (tourId)  => {
    const token = localStorage.getItem('token') || null;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    //   console.log(tourId);

    const response = await axios.get(`http://localhost:4000/api/tours/getTour/${tourId}`,config)
    console.log("data",response);
    return response.data;
})

export const fetchGuidesByIds = createAsyncThunk('tours/fetchGuidesByIds', async (guideIds)  => {
    const token = localStorage.getItem('token') || null;
    // console.log("guideIds",guideIds);
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

    const response = await axios.post(`http://localhost:4000/api/users/guides-by-ids`,{guideIds})
    // console.log("fetchGuidesByIds",response);
    return response.data;
})

export const fetchGuideProfile = createAsyncThunk('tours/fetchGuideProfile', async (__,thunkAPI)  => {
    const token = localStorage.getItem('token') || null;
    let guideId = thunkAPI.getState().tours.cartTourBuId._id
// console.log("guideId slice",guideId);
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // console.log(token);

  const response = await axios.get(`http://localhost:4000/api/tours/tour/${guideId}/guide`)
//   console.log("data",response);
  return response.data
})


export const tourSlice= createSlice({

    name: 'tours',
    initialState,
    reducers: {
      resetCartTourBuId: (state) => {
          state.cartTourBuId = [];
      },
      resetGuideProfile: (state) => {
          state.guideProfile = [];
      }
  },
    extraReducers: (builder) => {
        builder.addCase(fetchCardTours.pending, (state) => {
            state.loading = true;
        });


        builder.addCase(fetchCardTours.fulfilled, (state, action) => {
            state.loading = false;
            state.cartTour = action.payload;
            // console.log("state", state.cartTour);
            state.error = '';
        });
    
        builder.addCase(fetchCardTours.rejected, (state, action) => {
            state.loading = false;
            state.cartTour = [];
            state.error = action.error.message;
        });

        builder.addCase(fetchGuidesByIds.pending, (state) => {
            state.loading = true;
        });


        builder.addCase(fetchGuidesByIds.fulfilled, (state, action) => {
            state.loading = false;
            state.guideIds = action.payload;
            // console.log("guideIds", state.guideIds);
            state.error = '';
        });
    
        builder.addCase(fetchGuidesByIds.rejected, (state, action) => {
            state.loading = false;
            state.guideIds = [];
            state.error = action.error.message;
        });


        builder.addCase(fetchGuideProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.guideProfile = action.payload;
            // console.log("guideProfile", state.guideProfile);
            state.error = '';
        });
    
        builder.addCase(fetchGuideProfile.rejected, (state, action) => {
            state.loading = false;
            state.guideProfile = [];
            state.error = action.error.message;
        });

        builder.addCase(fetchCardToursById.fulfilled, (state, action) => {
            state.loading = false;
            state.cartTourBuId = action.payload;
            // console.log("cartTourBuId", state.cartTourBuId);
            state.error = '';
        });
    }
})

export const { resetCartTourBuId, resetGuideProfile } = tourSlice.actions;
export default tourSlice.reducer;
