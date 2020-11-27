import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@atlaskit/css-reset';
import Column from "./components/Column";
import Header from "./layout/Header";
import { DragDropContext } from 'react-beautiful-dnd';
import seed from './seed';

const BASE_URL = 'https://api.pexels.com/v1/';

class App extends Component {

  state = seed;
  
  // componentDidMount(){
   
  //   fetch(`${BASE_URL}search?query=nature&per_page=1`, {
  //     headers: {
  //       Authorization: `${process.env.REACT_APP_API_KEY}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(json => json.photos.map(img => {
  //       console.log(img.src.large);
  //       this.setState({image: img.src.large})
  //     }));
    
  // }
  
  render() {
  
  // search?query=nature&per_page=1
  // style={{backgroundImage: `url(${BASE_URL})`}}
  // style={{backgroundImage: `url(${background})`}}
  let column;
  let tasks;

  { this.state.columnOrder.map(columnId =>{
    column = this.state.columns[columnId]
    tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
  }) }

  return (
    <Router>
      <Header />
      <DragDropContext
          onDragStart
          onDragUpdate
          onDragEnd
      />
      <Column key={column.id} column={column} tasks={tasks} />
      <DragDropContext/>
    </Router>
  );
  }
}
export default App;
