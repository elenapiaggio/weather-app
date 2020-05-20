import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherExtraInfo from "./WeatherExtraInfo";

const WeatherData = () => {
  return (
    <div>
      <WeatherTemperature 
        temperature = '30'
        weatherState = 'rain'
      />
      <WeatherExtraInfo
        humidity = '80'
        wind = '10'
       />
    </div>
  );
};

export default WeatherData;
