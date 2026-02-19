import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const addTrip = createAsyncThunk(
  'trip/addTrip',
  async (tripData) => {
    const response = await axios.post('http://localhost:5000/trips', tripData)
    return response.data
  }
)

export const getTrip = createAsyncThunk(
  'trip/getTrip',
  async() => {
    const response = await axios.get('http://localhost:5000/trips')
    return response.data
  }
)



const initialState = {
  trips:[]
}

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(addTrip.fulfilled, (state,action) => {
      state.trips.push(action.payload)
    })
    builder.addCase(getTrip.fulfilled, (state,action) => {
      state.trips = action.payload
    })
  }
})


export const {  } = tripSlice.actions

export default tripSlice.reducer