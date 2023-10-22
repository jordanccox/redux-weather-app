import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'EXAMPLE',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fetchWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;
