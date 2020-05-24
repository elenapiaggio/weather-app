import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData/Index";
import transformWeather from "../services/transformWeather";
import "./index.css";
import { api_weather } from "../../constants/api_url";

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Barcelona",
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
        {data ? <WeatherData data={data} /> : "Loading ..."}
      </div>
    );
  }
}

export default WeatherLocation;
