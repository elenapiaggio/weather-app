import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./WeatherLocation/ForecastItem/ForecastItem";
import "./forecastExtended.css";
import transformForecast from './services/transformForecast';

const api_key = 'cee0c281dcb7298c5e4cb87bc06dca36';
const url = "https://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
  constructor(props){
    super(props);
    this.state = {
      forecastData: null,
    }
  }

  componentDidMount() {
    this.updateCity(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.city !== this.props.city){
      this.setState({ forecastData: null })
      this.updateCity(nextProps.city);
    }
  }

  updateCity = city => {
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
    return forecastData.map( (forecast, index) => (
      <ForecastItem 
        key={index}
        weekDay={forecast.weekDay} 
        hour={forecast.hour} 
        data={forecast.data}
      />
    ));
  }

  renderProgress(){
    return (
      <h3>Loading forecast extended ...</h3>
    );
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;

    return (
      <div>
        <h2 className="forecast-title">{city} - Extended forecast</h2>
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
