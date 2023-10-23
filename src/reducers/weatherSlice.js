import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: [],
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addWeatherData: (state, action) => {
      state.cities.push(action.payload);
    },
  },
});

export const { addWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;
