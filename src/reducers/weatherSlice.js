import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: [],
  currentSearch: '',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addWeatherData: (state, action) => {
      state.cities.push(action.payload);
    },
    searchForCity: (state, action) => {
      state.currentSearch = action.payload;
    },
  },
});

export const { addWeatherData, searchForCity } = weatherSlice.actions;

export default weatherSlice.reducer;
