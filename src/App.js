import React, { Fragment, useState } from "react";
import seed from './seed';

function App() {

  const [state] = useState(seed);
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
    </div>
  );
}
export default App;
