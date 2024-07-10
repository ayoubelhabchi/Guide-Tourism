import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    guides: [],
    campings: [],
    tours: [],
    error: '',
}


export const fetchUsers = createAsyncThunk('users/fetchUsers', async (token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("Token",token);

  const response = await axios.get('http://localhost:4000/api/admin/allUsers', config);
  return response.data;
});

export const fetchGuides = createAsyncThunk('users/fetchGuides', async (token) => {

  // Axios request with authorization header
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config);

  const response = await axios.get('http://localhost:4000/api/admin/allguides', config);
  return response.data;
});

export const fetchCampings = createAsyncThunk('users/fetchCampings', async (token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config);

  const response = await axios.get('http://localhost:4000/api/camping/show', config);
  console.log("response", response);
  return response.data;
});

export const fetchTours = createAsyncThunk('users/fetchTours', async (token) => {

  // Axios request with authorization header
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get('http://localhost:4000/api/tours/allTours', config);
  console.log("tours", response);
  return response.data;
});


const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
        state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
        state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.users = []
        state.error = action.error.message
  })

  // Reducers for fetching guides
  builder.addCase(fetchGuides.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(fetchGuides.fulfilled, (state, action) => {
    state.loading = false;
    state.guides = action.payload;
    state.error = '';
  });
  builder.addCase(fetchGuides.rejected, (state, action) => {
    state.loading = false;
    state.guides = [];
    state.error = action.error.message;
  });

  // Reducers for fetching campings
  builder.addCase(fetchCampings.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(fetchCampings.fulfilled, (state, action) => {
    state.loading = false;
    state.campings = action.payload;
    console.log("state",state.campings);
    state.error = '';
  });
  builder.addCase(fetchCampings.rejected, (state, action) => {
    state.loading = false;
    state.campings = [];
    state.error = action.error.message;
  });

  //  Reducers for fetching tours
  builder.addCase(fetchTours.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(fetchTours.fulfilled, (state, action) => {
    state.loading = false;
    state.tours = action.payload;
    console.log("tours",state.tours);
    state.error = '';
  });
  builder.addCase(fetchTours.rejected, (state, action) => {
    state.loading = false;
    state.tours = [];
    state.error = action.error.message;
  });
}
});

export default usersSlice.reducer;