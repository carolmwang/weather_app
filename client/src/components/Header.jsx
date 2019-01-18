import React from 'react';

//header function for app

function Header(props) {
  return(
    <div className="background">
      {props.location ? <h1 className="header"> Weather in {props.location}, {props.country} </h1> : <h1 className="header"> Weather </h1>}
      <p className="date">{props.date}</p>
    </div>
  )
}

export default Header;