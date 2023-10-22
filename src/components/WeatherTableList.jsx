/* eslint-disable react/jsx-no-useless-fragment */
import Spinner from 'react-bootstrap/Spinner';

import { useGetForecastDataQuery } from '../weatherApi';

export default function WeatherTableList() {
  const { data, error, isError, isLoading } = useGetForecastDataQuery('89');

  console.log(error);

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

  return (
    <>
      Data: <br />
      {/* {data[0].name} */}
    </>
  );
}
