import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    }
  }

  componentDidMount() {
    let date = new Date();
    this.setState({
      today: (date.getMonth()+1) +  "/" + date.getDate() + "/" + date.getFullYear(),
    })
  }
  

  render() {
    return (
      <div>
      <Header date={this.state.today} location={this.state.location}/>
      </div>
    );
  }
}

export default App;
