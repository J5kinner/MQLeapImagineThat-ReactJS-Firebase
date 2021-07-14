import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd';

import intialData from './initial-data.js'
import Column from './JSX/column.jsx'

class ReorderList extends React.Component {
    state = intialData;

    onDragEnd = result => {
        //TODO
    }

    render() {
        return (
        <DragDropContext
            onDragEnd={this.onDragEnd}
        >
         {this.state.columnOrder.map((columnId) => {
        const column = this.state.columns[columnId];
        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
        
        })}
        </DragDropContext>
        );
    }
}

export default ReorderList;