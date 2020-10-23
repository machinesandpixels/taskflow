import React, {useState} from 'react';
import styled from 'styled-components';
import seed from '../seed';

function Column() {

    const [state, setState] = useState(() => seed);
    // currentState, updateState
    
    let background = '';
    const BASE_URL = 'https://api.pexels.com/v1/';
    fetch(`${BASE_URL}search?query=nature&per_page=1`, {
      headers: {
        Authorization: `${process.env.REACT_APP_API_KEY}`
      }
    })
      .then(res => res.json())
      .then(json => json.photos.map(img => {
        background = img.src.large;
        console.log(background);
        return background;
      }));
      
    const Background = styled.div`
    background-image: url(${background});
    `;
    const Container = styled.div`
    margin: 8px;
    border: 2px solid lightgrey;
    border-radius: 2px;
    `;
    const Title = styled.h3`
    padding: 8px;
    `
    const TasksList = styled.h3`
    padding: 8px;
    `
    let title = '';
    state.columnOrder.map(columnId =>{
        const column = state.columns[columnId]
        const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
        return title = column.title;
      })
      
    return (
    <Container>
        <Background>
            <Title>{ title }</Title>
            <TasksList>Tasks</TasksList>
        </Background>
    </Container>
    )
}

export default Column;
