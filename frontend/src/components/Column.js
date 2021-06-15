import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
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
// filter: drop-shadow(0 0 0.32rem rgb(101, 199, 245));

// border-radius: 2px;
const TasksList = styled.h3`
padding: 8px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
flex-grow: 1;
min-height: 200px;
`;

const Column = ({ column, tasks }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        return(
            <Container>
        {/* <Container>
            <Row>
                 <Col> */}
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
                    <Button 
                        onClick={ handleShow } 
                        variant="secondary"
                    >
                        Add Task
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                    </Modal>
                </Card.Body>
                </Card>
                {/* </Col>
            </Row>
        </Container> */}
        </Container> 
        );
}

export default Column;
