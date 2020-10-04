import React, { Component } from 'react';
import '@atlaskit/css-reset';
import Seed from './seed';
import Column from "./components/Column";

class App extends Component {
  
  render() {
    // const Background = styled.div`
    // background-image: url(${background});
    // `;
    // let background = '';
    // const BASE_URL = 'https://api.pexels.com/v1/';
    // fetch(`${BASE_URL}search?query=nature&per_page=1`, {
    //   headers: {
    //     Authorization: `${process.env.REACT_APP_API_KEY}`
    //   }
    // })
    //   .then(res => res.json())
    //   .then(json => json.photos.map(img => {
    //     background = img.src.large;
    //     console.log(background);
    //     return background;
    //   }));
    
  // search?query=nature&per_page=1
  // style={{backgroundImage: `url(${BASE_URL})`}}
  // style={{backgroundImage: `url(${background})`}}
  return (
    <div className="App">
     <h1>Taskflow</h1>
     <Column />
    </div>
  );
  }
}
export default App;
