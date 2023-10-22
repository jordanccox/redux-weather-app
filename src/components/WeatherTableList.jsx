/* eslint-disable react/jsx-no-useless-fragment */
import Spinner from 'react-bootstrap/Spinner';

import {
  useGetForecastDataQuery,
  useGetGeocoderDataQuery,
} from '../weatherApi';

export default function WeatherTableList() {
  // const { data, error, isError, isLoading } =
  // useGetGeocoderDataQuery('Fort Carson');
  const { data, error, isError, isLoading } = useGetForecastDataQuery('Fort Collins');

  console.log(data);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (isError || data.length <= 0) {
    return (
      <>
        {isError ? (
          <h1>
            Error {error.status}: {error.data.message}
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
