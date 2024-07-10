import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// const initialState = {
//     loading: false,
//     booking: [],
//     error: '',
// }

// export const Booking = createAsyncThunk('users/Booking', async ()  => {
//     const token = localStorage.getItem('token') || null;

//     const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//     const response = await axios.post('http://localhost:4000/api/booking/book',config)
//     return response.data;
// })


const [formData, setFormData] = useState({
    name: '',
    location: '',
    date: '',
    duration: '',
    group_member: '',
    isPrivate: '',
    price: '',
    description: '',
  });


const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token') || null;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
        
    // try {
      await axios.post('http://localhost:4000/api/booking/book',formData, config);
    // } catch (error) {
    //   console.error(error);
    // }
  }

// export const fetchCampingsById = createAsyncThunk('users/fetchCampingsById',async (campingId) => {

//     const token = localStorage.getItem('token') || null;

//     const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const response = await axios.get(`http://localhost:4000/api/camping/get/${campingId}`,config);
//       return response.data;
//     }
//   )

// const campingSlice = createSlice({
//     name: 'users',
//     initialState,
//     extraReducers: (builder) => {
//         builder.addCase(Booking.pending, (state) => {
//             state.loading = true;
//         });
    
//         builder.addCase(Booking.fulfilled, (state, action) => {
//             state.loading = false;
//             state.booking = action.payload;
//             console.log("campings", state.campings);
//             state.error = '';
//         });
    
//         builder.addCase(Booking.rejected, (state, action) => {
//             state.loading = false;
//             state.booking = [];
//             state.error = action.error.message;
//         });
//     }
// })

export default Booking.reducer;