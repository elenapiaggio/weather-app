import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherData/IndexWeatherData';

const ForecastItem = ({ weekDay, hour, data }) => {
    return ( 
        <div>
           <div> {weekDay} Hora: {hour} hs</div>
           <div>
               <WeatherData
                   data={data}
               />
           </div>
        </div>
     );
}
 
ForecastItem.propTypes = {
    city: PropTypes.string.isRequired,
    hour:PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}
export default ForecastItem;