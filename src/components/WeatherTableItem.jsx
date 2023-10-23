/* eslint-disable react/prop-types */
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

export default function WeatherTableItem({ data }) {
  const cities = useSelector((state) => state.weather.cities);
  console.log(cities);

  return (
    <Row className="bg-light pt-2 pb-2 mt-3">
      <Col className="text-center">{data.city}</Col>
      <Col>
        <Sparklines data={data.tempsArray}>
          <SparklinesLine color="red" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p className="text-center mb-1">{data.avgTemp}</p>
      </Col>
      <Col>
        <Sparklines data={data.pressureArray}>
          <SparklinesLine color="blue" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </Col>
      <Col>
        <Sparklines data={data.humidityArray}>
          <SparklinesLine color="gold" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </Col>
    </Row>
  );
}
