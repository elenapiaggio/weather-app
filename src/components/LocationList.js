import React from "react";
import WeatherLocation from "./WeatherLocation/IndexWeatherLocation";
import PropTypes from "prop-types";



const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    console.log(`handleWeatherLocationClick ${city}`);
    onSelectedLocation(city);
  }
  const strToComponents = cities => (
    cities.map( (city) => 
      (
        <WeatherLocation 
          key={city} 
          city={city} 
          onWeatherLocationClick = { () => handleWeatherLocationClick(city) }
        />
      )


   )
  )

  return (
      <div>
        {strToComponents(cities)}
      </div>

  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func.isRequired
}
export default LocationList;
