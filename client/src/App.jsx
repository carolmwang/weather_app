import React, { Component } from 'react';
import './App.css';

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
    this.handleChange = this.handleChange.bind(this);
    this.updateWeather = this.updateWeather.bind(this);
  }


  componentDidMount() {
    let date = new Date();
    this.setState({
      today: (date.getMonth()+1) +  "/" + date.getDate() + "/" + date.getFullYear(),
    })
  }


  updateWeather(weather) {
    this.setState({
      city: weather.city,
      weather: weather,
    })
  }

  handleChange(ev) {
    ev.preventDefault();
    const { name, value} = ev.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
      <Header date={this.state.today} location={this.state.city} country={this.state.weather.country}/>
      <Main updateWeather={this.updateWeather} location={this.state.location}/>
      {this.state.weather ? <Weather weather={this.state.weather}/> : ''}
      </div>
      
    );
  }
}

export default App;
