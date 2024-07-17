import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Components/navbar';
import Weather from './Components/weather';
import Map from './Components/map';
import Footer from './Components/footer';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [coords, setCoords] = useState(null);

  const fetchWeather = async (query) => {
    try {
      const apiKey = 'YOUR_API_KEY';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`);
      setWeatherData(response.data);
      setCoords([response.data.coord.lat, response.data.coord.lon]);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  return (
    <div style={{ backgroundColor: 'skyblue', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onSearch={fetchWeather} />
      <div style={{ flex: 1, padding: '1rem' }}>
        <Weather data={weatherData} />
        <Map coords={coords} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
