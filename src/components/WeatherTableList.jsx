import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../reducers/weatherSlice';

export default function WeatherTableList() {
  const selectedState = useSelector((state) => state.weather.value);
  const dispatch = useDispatch();

  dispatch(fetchWeatherData('hello'));

  return { selectedState };
}
