import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from 'react-bootstrap/Spinner';
import { Col, Row } from 'react-bootstrap';

import { useGetForecastDataQuery } from '../reducers/weatherApi';
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

const renderData = (citiesList) =>
  citiesList
    .map((city, index) => <WeatherTableItem key={index} data={city} />)
    .reverse();

export default function WeatherTableList() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.weather.cities);
  const currentCity = useSelector((state) => state.weather.currentSearch);

  const { data, isError, isLoading, isFetching } =
    useGetForecastDataQuery(currentCity);

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const forecastData = {
        id: data.city.id,
        city: data.city.name,
        tempsArray: populateDataArrays(data, 'temp'),
        avgTemp: findAverage(data, 'temp'),
        pressureArray: populateDataArrays(data, 'pressure'),
        avgPressure: findAverage(data, 'pressure'),
        humidityArray: populateDataArrays(data, 'humidity'),
        avgHumidity: findAverage(data, 'humidity'),
      };

      if (!cities.find((city) => city.id === forecastData.id)) {
        dispatch(addWeatherData(forecastData));
      }
    }
  }, [dispatch, isLoading, isError, data, cities]);

  const renderedCitiesList = useMemo(() => renderData(cities), [cities]);

  if (isLoading || isFetching) {
    return (
      <>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
        <div>{renderedCitiesList}</div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h4 className="bg-danger text-light pt-2 pb-2 text-center">
          Oops! An unexpected error occurred. Please check your spelling and try
          again.
        </h4>
        <div>{renderedCitiesList}</div>
      </>
    );
  }

  return <div>{renderedCitiesList}</div>;
}
