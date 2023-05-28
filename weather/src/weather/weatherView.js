import React, { useState } from 'react'
import styles from './weather.module.css';
export default function WeatherView({weather, changeCity}) {
 const [cityName, setCityName] = useState('New York');

  function handleClick(e){
    e.preventDefault();
    cityName === 'Montreal' ? setCityName('New York') : setCityName('Montreal') 
    changeCity(cityName);
  }

  return (
    <div >
  { weather.length > 0 && <div>
   <div className={weather[0].current.condition.text.includes("rain") ? styles.weatherViewRain : styles.weatherView} >
    <h1>{  weather[0].location.name}</h1>
    <h3>
     <p> {weather[0].current.temp_c}° {weather[0].current.condition.text} </p>
     <p>Feels like: {weather[0].current.feelslike_c}° </p>
     <p> Wind:  {weather[0].current.wind_kph}kph </p>
    </h3>
    <button onClick={(e)=>handleClick(e)} className={styles.button}>{cityName}</button>
    </div>
      </div> }
    </div>
  )
}
