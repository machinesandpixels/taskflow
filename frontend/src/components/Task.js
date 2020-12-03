import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

class Task extends Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        >
          { (provided) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={ provided.innerRef }
            >
              { this.props.task.info }
            </Container>
          ) }
      </Draggable>
    )
  }
}

export default Task;
