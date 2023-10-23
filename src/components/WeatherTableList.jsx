/* eslint-disable react/jsx-no-useless-fragment */
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

import { useEffect } from 'react';
import { useGetForecastDataQuery } from '../weatherApi';
import WeatherTableItem from './WeatherTableItem';
import { addWeatherData } from '../reducers/weatherSlice';

const populateDataArrays = (weatherData, measurementType, array = []) => {
  weatherData.list.forEach((item) => array.push(item.main[measurementType]));

  return array;
};

const findAverage = (weatherData, measurementType) => {
  const sum = weatherData.list.reduce(
    (accumulator, item) => accumulator + item.main[measurementType],
    0
  );

  return sum / 40;
};

export default function WeatherTableList() {
  const dispatch = useDispatch();
  // const cities = useSelector((state) => state.weather.cities);

  const { data, error, isError, isLoading } =
    useGetForecastDataQuery('Florida');

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const forecastData = {
        city: data.city.name,
        tempsArray: populateDataArrays(data, 'temp'),
        avgTemp: findAverage(data, 'temp'),
        pressureArray: populateDataArrays(data, 'pressure'),
        avgPressure: findAverage(data, 'pressure'),
        humidityArray: populateDataArrays(data, 'humidity'),
        avgHumidity: findAverage(data, 'humidity'),
      };
      dispatch(addWeatherData(forecastData));
    }
  }, [dispatch, isLoading, isError, data]);

  console.log(data); // testing

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (isError || data === undefined) {
    return (
      <>
        {isError ? (
          <h1>
            Error {error.status}: {error.data}
          </h1>
        ) : (
          <h1>Oops! An unexpected error occurred.</h1>
        )}
      </>
    );
  }

  console.log('test');

  // TODOS:

  // 1. Create another reducer for storing all the weather data after it is put in the forecastData object. (If i have time, normalize it as well)
  // 2. After forecast data is received, dispatch it to the citySearchReducer
  // 3. To render the data, loop through all the state from the citySearchReducer, and pass that data to WeatherTableItem.\
  // 4. Display data to page...
  // 5. Function for handling search input

  // const renderData = () => {
  //   return <WeatherTableItem
  // }

  return <WeatherTableItem />;
}
