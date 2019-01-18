import React from 'react';

//header function for app

function Header(props) {
  return(
    <div>
      {props.location ? <h1> Weather in {props.location} </h1> : <h1> Weather </h1>}
      <p>Today's Date: {props.date}</p>
    </div>
  )
}

export default Header;