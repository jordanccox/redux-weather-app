/* eslint-disable import/no-extraneous-dependencies */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import WeatherTable from './components/WeatherTable';

function App() {
  console.log(import.meta.env.VITE_API_KEY); // testing

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <InputGroup className="mb-3 mt-3">
            <Form.Control
              placeholder="Search for a city"
              aria-label="Search for a city"
            />
            <Button variant="outline-secondary" id="search-button">
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <WeatherTable />
    </Container>
  );
}

export default App;
