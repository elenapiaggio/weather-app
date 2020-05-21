import React from "react";
import Location from "./Location";
// import WeatherData from "../WeatherLocation/WeatherData/Index";
import WeatherData from './WeatherData/Index';

const WeatherLocation = () => {
  return (
    <div>
      <Location 
        city = {'Barcelona'}
      />
      <WeatherData />
    </div>
  );
};

export default WeatherLocation;
