import  {useEffect, useState } from 'react';
import WeatherView from './weather/weatherView' ;

function Weather()  {
    const [weather, setWeather] = useState([]) ;
    const [city, setCityName] = useState('montreal');

    useEffect(() => {
    getWeatherData(city);
    },[city]);

function getWeatherData(cityName){
  fetch('http://api.weatherapi.com/v1/current.json?key=77f7ad2b8f014f2f99e225340232104&q=' + cityName + '&aqi=no')
  .then((response) => response.json()).then((actualData) => {setWeather([actualData])
  });
}

const changeCity = (city) =>{
setCityName(city);
}
  return(
    <div>
      <WeatherView weather={weather} changeCity={changeCity} />
  </div>
)
}
export default Weather;