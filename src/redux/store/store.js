import { configureStore } from '@reduxjs/toolkit'
import tripReducer from '../slices/tripSlice'
import locationReducer from '../slices/locationSlice'

export const store = configureStore({
  reducer: {
    trip: tripReducer,
    location: locationReducer
  }
})