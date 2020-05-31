import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./WeatherLocation/ForecastItem/ForecastItem";
import "./forecastExtended.css";
import WeatherData from "./WeatherLocation/WeatherData/IndexWeatherData";
import transformForecast from './services/transformForecast';

// const days = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// const data = {
//   temperature: 10,
//   humidity: 10,
//   weatherState: 'SUN',
//   wind: 'normal',
// }

const api_key = 'cee0c281dcb7298c5e4cb87bc06dca36';
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
  constructor(){
    super();
    this.state = {
      forecastData: null,
    }
  }

  componentDidMount() {
    const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
    fetch(url_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        console.log(weather_data);
        const forecastData = transformForecast(weather_data);
        console.log(forecastData);
        this.setState({ forecastData })
      }
    )

  }

  renderForecastItemDays(forecastData) {
    return forecastData.map( (forecast) => (
      <ForecastItem 
        key={`${forecast.weekDay}$forecast.hour`}
        weekDay={forecast.weekDay} 
        hour={forecast.hour} 
        data={forecast.data}
      />
    ));
  }

  renderProgress(){
    return (
      <h3>Cargando pronóstico extendido ...</h3>
    );
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;

    return (
      <div>
        <h2 className="forecast-title">pronostico extendido {city}</h2>
        {
          forecastData ?
          this.renderForecastItemDays(forecastData) :
          this.renderProgress()
        }
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
