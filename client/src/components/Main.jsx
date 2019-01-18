import React, { Component } from 'react';

import {
  weatherByCity,
  weatherByZip,
} from '../../services/api.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      city: '',

    }
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
}