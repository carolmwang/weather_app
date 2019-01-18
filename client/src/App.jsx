import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';

import {
  weatherByCity,
  weatherByZip,
} from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    let date = new Date();
    this.setState({
      today: (date.getMonth()+1) +  "/" + date.getDate() + "/" + date.getFullYear(),
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    weatherByZip()
    .then(data => {
      this.setState({
        zipcode: data.zipcode
      })
    })
  }

  render() {
    return (
      <div>
      <Header date={this.state.today} location={this.state.location}/>
      <Main handleSubmit={this.handleSubmit}/>
      </div>
      
    );
  }
}

export default App;
