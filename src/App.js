import { useState } from 'react'; 
import './App.css'; 

function App() {
  // 'setCity' is the function to update 'city'
  const [city, setCity] = useState('')
  // 'setWeatherInfo' function used to update 'weatherInfo'
  const [weatherInfo, setWeatherInfo] = useState(null);

  // Function to fetch weather data for the specified city
  function getWeather() {
    const apiKey = 'c122238fca5f537a0713f26936b03a93'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    //will come back and input my actual url
  

