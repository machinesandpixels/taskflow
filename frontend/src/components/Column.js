import React from 'react';
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

const Column = ({ column, tasks }) => {

        return(
            <Container>
                <Title>{ column.title }</Title>
                <Droppable droppableId={column.id}>
                    {(provided, snapshot) => (
                        <TasksList
                            ref={ provided.innerRef }
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                        >
                            { 
                            tasks.map((task, index) => 
                            <Task key={task.id} task={task} index={index} />) 
                            }
                             
                            { provided.placeholder }
                        </TasksList>
                    )}
                </Droppable>
            </Container>
        );
}

export default Column;
