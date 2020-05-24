import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tollbar from '@material-ui/core/Toolbar';
import LocationList from "./components/LocationList";
import { Grid, Col, Row } from "react-flexbox-grid";
import "./App.css";
import Toolbar from "@material-ui/core/Toolbar";

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
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                    Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectednLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className = 'details'></div>
              </Paper>
              <div className = 'details'> Info Extended </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
