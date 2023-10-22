import { useSelector } from 'react-redux';

export default function WeatherTableList() {
  const selectedState = useSelector((state) => state.weather);

  return <>{selectedState}</>;
}
