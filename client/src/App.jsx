import React, { Component } from 'react';
import './index.css';

import Header from './components/Header';
import Main from './components/Main';
import Weather from './components/Weather';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      today: '',
      weather: '',
    };
    this.updateWeather = this.updateWeather.bind(this);
  }

  componentDidMount() {
    let date = new Date();
    this.setState({
      today: (date.getMonth()+1) +  "." + date.getDate() + "." + date.getFullYear(),
    })
  }


  updateWeather(weather) {
    this.setState({
      city: weather.city,
      weather: weather,
    })
  }

  render() {
    return (
      <div className="main">
      <Header date={this.state.today} location={this.state.city} country={this.state.weather.country}/>
      <Main updateWeather={this.updateWeather} location={this.state.location}/>
      {this.state.weather ? <Weather weather={this.state.weather}/> : ''}
      </div>
      
    );
  }
}

export default App;
