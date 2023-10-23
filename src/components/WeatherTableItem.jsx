import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

export default function WeatherTableItem(props) {
  const cities = useSelector((state) => state.weather.cities);
  console.log(cities);

  return (
    <Row className="bg-light pt-2 pb-2">
      <Col className="text-center">City Name</Col>
      <Col>
        <Sparklines data={[5, 10, 5, 20, 233, 22, 1, 3, 5]}>
          <SparklinesLine color="red" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </Col>
      <Col>
        <Sparklines data={[5, 10, 5, 20, 233, 22, 1, 3, 5]}>
          <SparklinesLine color="blue" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </Col>
      <Col>
        <Sparklines data={[5, 10, 5, 20, 233, 22, 1, 3, 5]}>
          <SparklinesLine color="gold" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </Col>
    </Row>
  );
}
