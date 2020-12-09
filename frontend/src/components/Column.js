import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import styled from 'styled-components';

const Container = styled.div`
margin: 8px;
width: 300px;
display: flex;
flex-direction: column;
`;
// border: 2px solid lightgrey;
// border-radius: 2px;
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
                <Card>
                <Card.Header as="h3">{ column.title }</Card.Header>
                <Card.Body>
                    <Card.Text>
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
                
                </Card.Text>
                <Button onClick={() => alert('clicked!')} variant="primary">Add Task</Button>
                </Card.Body>
                </Card>
            </Container> 
        );
}

export default Column;
