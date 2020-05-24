import React from 'react';
import './App.css';
// import WeatherLocation from './components/WeatherLocation/Index'
import WeatherLocation from './components/WeatherLocation/Index';

function App() {
  return (
    <div className="App">
      <WeatherLocation
        city = 'Barcelona, bcn'
      />
    </div>
  );
}

export default App;
