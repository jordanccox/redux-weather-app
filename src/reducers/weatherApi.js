import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  endpoints: (builder) => ({
    getForecastData: builder.query({
      queryFn: async (city) => {
        const rootUrl = 'http://api.openweathermap.org/';

        try {
          const cityData = await axios.get(
            `${rootUrl}geo/1.0/direct?q=${city}&appid=${
              import.meta.env.VITE_API_KEY
            }`
          );

          const forecastData = await axios.get(
            `${rootUrl}data/2.5/forecast?lat=${cityData.data[0].lat}&lon=${
              cityData.data[0].lon
            }&appid=${import.meta.env.VITE_API_KEY}`
          );

          return forecastData;
        } catch (axiosError) {
          const err = axiosError;

          return {
            error: {
              status: err.response?.status,
              data: err.responsne?.data || err.message,
            },
          };
        }
      },
    }),
  }),
});

export const { useGetForecastDataQuery } = weatherApi;
