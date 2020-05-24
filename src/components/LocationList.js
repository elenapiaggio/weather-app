import React from "react";
import WeatherLocation from "./WeatherLocation/Index";

const LocationList = () => {
  return (
    <div>
      <WeatherLocation city="Barcelona, es" />
      <WeatherLocation city="Yaunde" />
      <WeatherLocation city="Berlin,de" />
      <WeatherLocation city="Chad" />
      <WeatherLocation city="Frankfurt,de" />
    </div>
  );
};

export default LocationList;
