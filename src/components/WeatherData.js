import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherExtraInfo from "./WeatherExtraInfo";

import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from '../constants/weathers';

const WeatherData = () => {
  return (
    <div>
      <WeatherTemperature 
        temperature = {30}
        weatherState = {WINDY}
      />
      <WeatherExtraInfo
        humidity = '80'
        wind = '10'
       />
    </div>
  );
};

export default WeatherData;
