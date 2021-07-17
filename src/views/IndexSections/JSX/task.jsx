import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  height: 40px;

  display: flex; 
  justify-content: center;
  align-items: center;
`;

export default class Task extends React.Component {
  render() {
    const isDragDisabled = this.props.task.id === 'task-1';
    return (
      <Draggable 
      draggableId={this.props.task.id} 
      index={this.props.index}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {/* this is where you can change the output of the subtasks */}
            {this.props.task.content} 
          </Container>
        )}
      </Draggable>
    );
  }
}
