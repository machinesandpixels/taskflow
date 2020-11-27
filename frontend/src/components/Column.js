import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import styled from 'styled-components';

const Container = styled.div`
margin: 8px;
border: 2px solid lightgrey;
border-radius: 2px;
`;

const Title = styled.h3`
padding: 8px;
`;

const TasksList = styled.h3`
padding: 8px;
`;

class Column extends Component {
    
    render() {
        return(
            
            <Container>
                <Title>{ this.props.column.title }</Title>
                {/* <Droppable droppableId={this.props.column.id}> */}
                    <TasksList>{ this.props.tasks.map(task => 
                        <Task key={task.id} task={task} />) }
                    </TasksList>
                {/* </Droppable> */}
            </Container>

        );
    }
}

export default Column;
