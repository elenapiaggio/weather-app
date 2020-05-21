import React from "react";
import WeatherIcons from "react-weathericons";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "../../../constants/weathers";
import PropTypes from 'prop-types';
import './index.css';

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [WINDY]: "windy",
};

const getWeatherIcon = (weatherState) => {
  const icon = icons[weatherState];
  const sizeIcon = '4x';

  if (icon) {
    return <WeatherIcons className='wicon' name={icon} size={sizeIcon} />;
  } else {
    return <WeatherIcons className='wicon' name={"sun"} size={sizeIcon} />;
  }
};

const WeatherTemperature = ({ temperature, weatherState }) => {
  return (
    <div className='weatherTemperatureCont'>
      {getWeatherIcon(weatherState)}
      <span className='temperature'>{`${temperature} `}</span>
      <span className='temperatureType'>{`ºC`}</span>
    </div>
  );
};

WeatherTemperature.propTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;
