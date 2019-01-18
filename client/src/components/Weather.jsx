import React from 'react';

function Weather(props) {
  return(
    <div>
      <p>Weather: {props.weather.temperature}&deg;F</p>
    </div>
  )
}

export default Weather;