import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import styled from 'styled-components';

const Container = styled.div`
margin: 8px;
border: 2px solid lightgrey;
border-radius: 2px;
width: 300px;
display: flex;
flex-direction: column;
`;

const Title = styled.h3`
padding: 8px;
`;

const TasksList = styled.h3`
padding: 8px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
flex-grow: 1;
min-height: 200px;
`;

class Column extends Component {
    
    render() {
        return(
            <Container>
                <Title>{ this.props.column.title }</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                        <TasksList
                            ref={ provided.innerRef }
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                        >
                            { 
                            this.props.tasks.map((task, index) => 
                            <Task key={task.id} task={task} index={index} />) 
                            }
                            { provided.placeholder }
                        </TasksList>
                    )}
                </Droppable>
            </Container>

        );
    }
}

export default Column;
