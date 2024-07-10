import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/userSlices';

const store = configureStore({
  reducer: rootReducer,
});

export default store;