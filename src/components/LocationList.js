import React from "react";
import WeatherLocation from "./WeatherLocation/Index";

const LocationList = () => {
  return (
    <div>
      <WeatherLocation city="Barcelona, es" />
      <WeatherLocation city="Madrid, es" />
      <WeatherLocation city="Lima, pe" />
      <WeatherLocation city="Buenos Aires, ar" />
    </div>
  );
};

export default LocationList;
