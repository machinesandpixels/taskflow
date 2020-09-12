import React, { Fragment, useState } from "react";
import '@atlaskit/css-reset';
import Column from "./components/Column";

function App() {

  const BASE_URL = 'https://api.pexels.com/v1/';
  fetch(`${BASE_URL}search?query=nature&per_page=1`, {
    headers: {
      Authorization: `${process.env.REACT_APP_API_KEY}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));

  
  // search?query=nature&per_page=1
  // style={{backgroundImage: `url(${BASE_URL})`}}

  
  
  return (
  
    
    <div  className="App">
     <h1>Taskflow</h1>
     <Column />
    </div>
  );
}
export default App;
