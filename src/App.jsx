import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useDispatch } from 'react-redux';
import WeatherTable from './components/WeatherTable';
import { searchForCity } from './reducers/weatherSlice';

function App() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchButton = () => {
    if (search !== '') {
      dispatch(searchForCity(search));
      setSearch('');
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter' && search !== '') {
      dispatch(searchForCity(search));
      setSearch('');
    }
  };

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <InputGroup className="mb-3 mt-3">
            <Form.Control
              placeholder="Search for a city"
              aria-label="Search for a city"
              value={search}
              onChange={handleInput}
              onKeyDown={handleEnterKey}
            />
            <Button
              variant="outline-secondary"
              id="search-button"
              onClick={handleSearchButton}
            >
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
