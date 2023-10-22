import { Col, Row } from 'react-bootstrap';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function WeatherTableItem(props) {


  return (
    <Row className="bg-light pt-2 pb-2">
      <Col className="text-center">City Name</Col>
      <Col>
        <Sparklines data={[5, 10, 5, 20, 233, 22, 1, 3, 5]}>
          <SparklinesLine color="red" />
        </Sparklines>
      </Col>
      <Col>
        <Sparklines data={[5, 10, 5, 20, 233, 22, 1, 3, 5]}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </Col>
      <Col>
        <Sparklines data={[5, 10, 5, 20, 233, 22, 1, 3, 5]}>
          <SparklinesLine color="gold" />
        </Sparklines>
      </Col>
    </Row>
  );
}
