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
	//When fetch is successful should be coverted to JSON ok so now results will be passed to call back function
  fetch(url) 
	.then((response) => response.json()) 
	.then((data) => { 
  // Extracting the 'temp' and "feels-like" field from 'main' in the data object. This represents the current temperature
	  let MT = Math.round(data.main.temp);
	  let FL = Math.round(data.main.feels_like);
	
	  const weather = {
		location: `Weather in ${data.name}`,
		temperature: `Temperature: ${MT} C`,
		feelsLike: `Feels Like: ${FL} C`,
		humidity: `Humidity: ${data.main.humidity} %`,
		wind: `Wind: ${data.wind.speed} km/h`,
		condition: `Weather Condition: ${data.weather[0].description}`,
	};

	setWeatherInfo(weather);
})

// catches any errors that might happen during the network request or the processing of the response
.catch((error) => {
	console.error(error);
});
}

return (
	<div className='weather-container'>
		<input
			type='text'
			placeholder='Enter city name'
			value={city}
			onChange={(e) => setCity(e.target.value)}
		/>