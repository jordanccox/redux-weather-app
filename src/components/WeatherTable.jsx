/* eslint-disable import/no-extraneous-dependencies */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import WeatherTableList from './WeatherTableList';

export default function WeatherTable() {
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
      <WeatherTableList />
    </>
  );
}
