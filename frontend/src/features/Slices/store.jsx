import { combineReducers, configureStore } from '@reduxjs/toolkit';
import campingSlice from './campingSlice';
import userProfileSlice from './userProfileSlice';
import guideSlice from './guideSlice';
import tourSlice from './tourSlice'
import authPasswordSlice from './authPasswordSlice';
import bookingSlice from './bookingSlice';
import ordersSlice from './ordersSlice';
import reviewSlice from './reviewSlice';
import infoguideSlice from './infoguideSlice';

const rootReducer = combineReducers({
  campings: campingSlice,
  users: userProfileSlice,
  guides: guideSlice,
  guideInfo: infoguideSlice,
  tours: tourSlice,
  password: authPasswordSlice,
  bookings: bookingSlice,
  orders: ordersSlice,
  reviews: reviewSlice
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;