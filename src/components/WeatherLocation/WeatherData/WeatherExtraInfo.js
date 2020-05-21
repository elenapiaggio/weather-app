import React from "react";
import PropTypes from 'prop-types';

const WeatherExtraInfo = ( {humidity, wind} ) => {
  return (
    <div>
      <span>{`${humidity}% - `}</span>
      <span>{`${wind} wind`}</span>
    </div>
  );
};

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
}

export default WeatherExtraInfo;
