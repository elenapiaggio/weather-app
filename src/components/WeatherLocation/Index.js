import React, {Component} from "react";
import Location from "./Location";
import WeatherData from './WeatherData/Index';
import './index.css';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from '../../constants/weathers';

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
}

class WeatherLocation extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: 'Barcelona',
      data: data,
    }
  }

  handleUpdateClick = () => {
    console.log('handleUpdate clicked');
    this.setState({
      city: 'Lima'
    })
  }

  render() {
    const { city, data } = this.state;
    return (
      <div className='weatherLocationCont'>
      <Location 
        city = {city}
      />
      <WeatherData 
        data={data}
      />
      <button onClick = {this.handleUpdateClick} >Update</button>
    </div>
    )
  }
}

export default WeatherLocation;