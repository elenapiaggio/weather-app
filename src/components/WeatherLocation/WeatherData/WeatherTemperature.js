import React from "react";
import WeatherIcons from "react-weathericons";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "../../../constants/weathers";
import PropTypes from 'prop-types';

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
  if (icon) {
    return <WeatherIcons name={icon} size="2x" />;
  } else {
    return <WeatherIcons name={"sun"} size="2x" />;
  }
};

const WeatherTemperature = ({ temperature, weatherState }) => {
  return (
    <div>
      {getWeatherIcon(weatherState)}
      <span>{`${temperature} ºC`}</span>
    </div>
  );
};

WeatherTemperature.propTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;
