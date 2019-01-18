import React, { Component } from 'react';

import { weatherByZip } from './../services/api';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      city: '',
      temperature:'',
      country: '',

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    weatherByZip(this.state.zipcode)
    .then(data => {
      console.log(data);
      this.setState({
        zipcode: this.state.zipcode,
        city: data.name,
        temperature: Math.ceil((data.main.temp*(9/5)) - 459.67),
        country: data.sys.country,
        description: data.weather,
      });
    this.props.updateWeather(this.state);
      
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
    return(
      <form onSubmit={this.handleSubmit} className="form">
        <label> Enter your Zipcode: </label>
        <br />
        <br />
        <input 
          type="text" 
          name="zipcode" 
          value={this.state.zipcode} 
          onChange={this.handleChange}/>
        <br />
        <input type="submit"
        value="submit" />
      </form>
    )

  }
}

export default Main;