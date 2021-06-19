import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import Column from "./Column";
import Header from "../layout/Header";
import { DragDropContext } from 'react-beautiful-dnd';
import seed from '../seed';

const BASE_URL = 'https://api.pexels.com/v1/';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
`;

class App extends Component {

  state = {
    seed: seed,
    image: ''
  };
  
  componentDidMount(){
   
    fetch(`${BASE_URL}search?query=nature&per_page=1`, {
      headers: {
        Authorization: `${process.env.REACT_APP_API_KEY}`
      }
    })
      .then(res => res.json())
      .then(json => json.photos.map(img => {
        this.setState({image: img.src.large})
      }));
    
  }

  onDragEnd = result => {
    // Updates the reordering of our column
    const { destination, source, draggableId } = result;
   
    if (!destination) return;

    const start = this.state.seed.columns[source.droppableId];
    const end = this.state.seed.columns[destination.droppableId];
    
    if (start === end){
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index,1);
      newTaskIds.splice(destination.index,0,draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state.seed,
        columns: {
          ...this.state.seed.columns,
          [newColumn.id]: newColumn,
        }
      };
      return this.setState({seed: newState});
    }
    
    // Moving from one column to the other
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index,1);

    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }

    const endTaskIds = Array.from(end.taskIds);
    endTaskIds.splice(destination.index,0,draggableId);

    const newEnd = {
      ...end,
      taskIds: endTaskIds,
    }
    const newState = {
      ...this.state.seed,
      columns: {
        ...this.state.seed.columns,
        [newStart.id]: newStart,
        [newEnd.id]: newEnd,
      }
    };
    this.setState({seed: newState});
  }

  toggleImg = () => {
    return 'toggleImg'
  }
  
  render() {
    
  //   const Img = () => {
  
  //     return (
  //       <div>hello
  //          <img src={this.state.image}></img>
  //       </div>
       
  //     )
  // }
 
  return (
    // onDragStart
  // onDragUpdate
  <Router>
    <Header />
    {/* <Img /> */}
    <Container>
    <DragDropContext onDragEnd={ this.onDragEnd }>
      { this.state.seed.columnOrder.map(columnId =>{
          const column = this.state.seed.columns[columnId]
          const tasks = column.taskIds.map(taskId => this.state.seed.tasks[taskId]);
          
          return <Column 
                  key={column.id} 
                  column={column} 
                  tasks={tasks}
                  />
        })
      }
    </DragDropContext>
    </Container>
  </Router>
  );
}};

export default App;
