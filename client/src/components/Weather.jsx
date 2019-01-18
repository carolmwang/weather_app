import React from 'react';

function Weather(props) {
  // let description = [];
  
  // for(let i = 0; i < props.weather.description.length; i ++) {
  //   description.push(props.weather.description[i].description)
  // }

  return(
    <div>
      <p className="weather">It is currently {props.weather.temperature}&deg;F</p>
      {
        props.weather.description.length > 1 ? 
          props.weather.description.map(description => {
            return <p key={description.id} className="weather">{description.description}</p>
          })
      : <p className="weather">{props.weather.description[0].description}</p>
      }
    </div>
  )
}

export default Weather;