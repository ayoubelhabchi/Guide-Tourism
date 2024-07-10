import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: '',
}

export const forgetPassword = createAsyncThunk('password/forgetPassword', async ({ email }) => {
    const response = await axios.post('http://localhost:4000/api/auth/password-forget', { email });
    return response.data;
})

export const restPassword = createAsyncThunk('password/restPassword', async ({ formData, token }) => {
    console.log("tt",token);
    const response = await axios.post(`http://localhost:4000/api/auth/rest-password/${token}`, formData);
    return response.data;
})



const authPasswordSlice = createSlice({
    name: 'password',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(forgetPassword.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(forgetPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
        });

        builder.addCase(forgetPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(restPassword.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(restPassword.fulfilled, (state) => {
            state.loading = false;
            state.error = '';
        })
        builder.addCase(restPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default authPasswordSlice.reducer;
