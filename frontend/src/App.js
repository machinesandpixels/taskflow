import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@atlaskit/css-reset';
import Seed from './seed';
import Column from "./components/Column";
import Header from "./layout/Header";

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
    <Router>
      <Header />
     <h1>Taskflow</h1>
     <Column />
    </Router>
  );
  }
}
export default App;
