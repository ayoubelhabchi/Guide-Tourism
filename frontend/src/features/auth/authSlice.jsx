import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        error: null,
    },
    reducers: {
        loginSuccess(state, action) {
            const { token, user } = action.payload;
            state.user = user;
            state.isAuthenticated = true;
            localStorage.setItem('token', token); 
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token'); 
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { loginSuccess, logout, setError } = authSlice.actions;

// We only want to add the `auth` data when we are making a request to our API server
export const addAuthToRequest = (request) => async (dispatch, getState) => {
    try {
        const token = localStorage.getItem('token') || '';
        return await request(token)(dispatch, getState);
    } catch (err) {
        console.log(`addAuthToRequest Error: ${err}`);
        throw err;
    }
};
