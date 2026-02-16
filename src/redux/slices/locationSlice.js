import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCountries = createAsyncThunk(
  'location/fetchCountries',
  async () => {
    const response = await axios.get('https://countriesnow.space/api/v0.1/countries')
    return response.data.data
  }
)


const initialState = {
  countries:[]
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload
    })
  }
})


export const {  } = locationSlice.actions

export default locationSlice.reducer