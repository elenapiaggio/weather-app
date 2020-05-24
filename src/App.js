import React, { Component } from "react";
import "./App.css";
import LocationList from "./components/LocationList";
import { Grid, Col, Row } from "react-flexbox-grid";

const cities = [
  "Barcelona, es",
  "Madrid, es",
  "Frankfurt, de",
  "Buenos Aires, ar",
  "Yaunde, cm",
];

class App extends Component {
  handleSelectednLocation = (city) => {
    console.log(`handleSElectionLocation ${city}`);
  };
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>Title</Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectednLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <div className = 'details'> hola que ae</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
