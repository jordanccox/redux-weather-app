import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSelector } from 'react-redux';
import WeatherTableList from './WeatherTableList';

export default function WeatherTable() {
  const currentCity = useSelector((state) => state.weather.currentSearch);

  return (
    <>
      <hr />
      <Row className="text-center">
        <Col>City</Col>
        <Col>Temperature (F)</Col>
        <Col>Pressure (hPa)</Col>
        <Col>Humidity (%)</Col>
      </Row>
      <hr />
      {currentCity !== '' ? (
        <WeatherTableList />
      ) : (
        <h4 className="text-center">
          Search for a city to see weather data displayed here
        </h4>
      )}
    </>
  );
}
