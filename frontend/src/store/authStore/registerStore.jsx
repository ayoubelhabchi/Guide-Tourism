import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/Slices/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    
  },
});

export default store;
