import axios from 'axios';

const API_KEY = '6ab3d1066b8c1983fdb242b989bf4e02';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


//set const FETCH_WEATHER to contain string 'FETCH_WEATHER'
//more easlier to use the type in different file like reducers etc
export const FETCH_WEATHER = 'FETCH_WEATHER';

//someone calls the fetch weather action, passes a city name
//argument as city: a string
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  //console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
