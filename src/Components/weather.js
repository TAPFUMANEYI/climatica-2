import React from 'react';

const Weather = ({ data }) => {
  if (!data) return <div>Enter a location to get the weather information.</div>;

//   display that if data available
  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
