import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const convertKelvinToFahrenheit = (tempInK) => {
  const tempInF = (tempInK - 273.15) * 1.8 + 32;

  return Math.round(tempInF);
};

export default function WeatherTableItem({ data }) {
  const avgTempF = convertKelvinToFahrenheit(data.avgTemp);

  const avgPressure = Math.round(data.avgPressure);

  const avgHumidity = Math.round(data.avgHumidity);

  return (
    <Row className="bg-light pt-2 pb-2 mt-3">
      <Col className="text-center">{data.city}</Col>
      <Col>
        <Sparklines data={data.tempsArray}>
          <SparklinesLine color="red" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p className="text-center mb-1 mt-1">{avgTempF} &deg;F</p>
      </Col>
      <Col>
        <Sparklines data={data.pressureArray}>
          <SparklinesLine color="blue" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p className="text-center mb-1 mt-1">{avgPressure} hPa</p>
      </Col>
      <Col>
        <Sparklines data={data.humidityArray}>
          <SparklinesLine color="gold" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p className="text-center mb-1 mt-1">{avgHumidity} %</p>
      </Col>
    </Row>
  );
}

WeatherTableItem.propTypes = {
  data: PropTypes.object,
};
