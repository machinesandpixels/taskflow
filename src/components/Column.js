import React, {useState} from 'react';
import styled from 'styled-components';
import seed from '../seed';

function Column() {

    const [state, setState] = useState(() => seed);
    // currentState, updateState
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
        // state.columnOrder.map(columnId =>{
        //     const column = state.columns[columnId]
        //     const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
        //     return column.title;
        //   })
    <Container>
        <Title>{ title }</Title>
        <TasksList>Tasks</TasksList>
    </Container>
    )
}

export default Column;
