/* eslint-disable react/jsx-no-useless-fragment */
import Spinner from 'react-bootstrap/Spinner';

import { useGetForecastDataQuery } from '../weatherApi';
import WeatherTableItem from './WeatherTableItem';

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
  const { data, error, isError, isLoading } =
    useGetForecastDataQuery('Florida');

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

  const forecastData = {
    city: data.city.name,
    tempsArray: populateDataArrays(data, 'temp'),
    avgTemp: findAverage(data, 'temp'),
    pressureArray: populateDataArrays(data, 'pressure'),
    avgPressure: findAverage(data, 'pressure'),
    humidityArray: populateDataArrays(data, 'humidity'),
    avgHumidity: findAverage(data, 'humidity'),
  };

  // TODOS:

  // 1. Create another reducer for storing all the weather data after it is put in the forecastData object. (If i have time, normalize it as well)
  // 2. After forecast data is received, dispatch it to the citySearchReducer
  // 3. To render the data, loop through all the state from the citySearchReducer, and pass that data to WeatherTableItem.\
  // 4. Display data to page...

  // const renderData = () => {
  //   return <WeatherTableItem
  // }

  console.log(forecastData); // testing

  return (
    <>
      <WeatherTableItem />
    </>
  );
}
