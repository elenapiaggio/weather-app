import React, { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from "prop-types";
import Location from "./Location";
import WeatherData from "./WeatherData/Index";
import transformWeather from "../services/transformWeather";
import "./index.css";
import { api_weather } from "../../constants/api_url";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const {city} = props;

    this.state = {
      city,
      data: null,
    };
  }

  componentDidMount(){
    this.handleUpdateClick();
  }

  handleUpdateClick = () => {
    fetch(api_weather)
      .then((resolve) => {
        return resolve.json();
      })
      .then((data) => {
        const newWeather = transformWeather(data);
        console.log(newWeather);
        this.setState({
          data: newWeather,
        });
      });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress Size = {50}/>}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
}

export default WeatherLocation;
