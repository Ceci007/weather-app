import getCountryName from './getCountryName';
import { weatherInfoDom, throwError, hideError } from './domFunctionality';
import setBackground from './setBackground';

function extractData(weatherData) {
  const extractedData = {
    sunrise: weatherData.sys.sunrise,
    sunset: weatherData.sys.sunset,
    id: weatherData.weather[0].id,
    generalInfo: weatherData.weather[0].description,
    location: `${weatherData.name}, ${getCountryName(weatherData.sys.country)}`,
    temperature: weatherData.main.temp,
    feelsLike: weatherData.main.feels_like,
    wind: weatherData.wind.speed,
    humidity: weatherData.main.humidity,
  };

  return extractedData;
}

async function getWeather(location) {
  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e123172475a3c99424973bc5edbd53f2&units=metric`,
    {
      mode: 'cors',
    },
  );
  if (promise.status === 404) {
    throwError();
  } else {
    hideError();
    const weatherData = await promise.json();
    const extractedData = extractData(weatherData);
    weatherInfoDom.displayData(extractedData);
    setBackground(
      extractedData.id,
      extractedData.sunrise,
      extractedData.sunset,
    );
  }
}

export { getWeather, extractData };