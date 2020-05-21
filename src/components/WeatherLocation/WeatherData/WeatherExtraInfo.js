import React from "react";
import PropTypes from 'prop-types';
import './index.css';

const WeatherExtraInfo = ( {humidity, wind} ) => {
  return (
    <div className='weatherExtraInfoCont'>
      <span className='extraInfoText'> {`Humidity ${humidity}% - `}</span>
      <span className='extraInfoText'> {`Winds ${wind}`}</span>
    </div>
  );
};

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
}

export default WeatherExtraInfo;
