import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Button
} from "reactstrap";import styled from "styled-components";

import Column from "./JSX/column.jsx";

const initialData = {
  count: 1,
  colCount: 1,
  newTask: "", 
  newCol: "",
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Skills",
      taskIds: [],
    },
 
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1"],
};

const Container = styled.div`
display: flex
flex-direction: row;
`;

class InnerList extends React.PureComponent {
  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map((taskId) => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}

class ReorderList extends React.Component {
  state = initialData;

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      };
      this.setState(newState);
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  inputChangeHandler = ({ target: { value } }) =>
    this.setState({
      newTask: value,
    });

  submitHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      // increment task count
      const newCount = prevState.count + 1;
      // create new id based on task count
      const newId = `task-${newCount}`;


      return {
        count: newCount,
        // clear input
        newTask: "",
        tasks: {
          // add to tasks array
          ...prevState.tasks,
          [newId]: { id: newId, content: prevState.newTask },
        },
        // add task id at the end of first column
        columns: {
          ...prevState.columns,
          "column-1": {
            ...prevState.columns["column-1"],
            taskIds: [...prevState.columns["column-1"].taskIds, newId],
          },

        },
      };
    });
  };

  inputChangeHandler2 = ({ target: { value } }) =>
    this.setState({
      newCol: value,
    });

  submitHandler2 = (e) => {
    e.preventDefault();

    this.setState((prevState) => {
      // increment col count
      const newCount = prevState.colCount + 1;
      // create new id based on row count
      const newId = `column-${newCount}`;


      return {

        colCount: newCount,
        // clear input
        newCol: "",
        // add column id at the end of first column
        columns: {
          // add to columns array
          ...prevState.columns,
          [newId]: { id: newId, title: prevState.newCol, taskIds: [] },
        },

        // add column to columnOrder
        columnOrder:[...prevState.columnOrder, newId],
        // columnOrder: {
        //   ...prevState.columns,},
        // columns: [...prevState.columns, newId,],
      };

    });
  };

  render() {
    return (

      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <Form onSubmit={this.submitHandler2}>
            <Row>
              <Col md="5">
                <FormGroup>
            <Input
              type="text"
              id="exampleFormControlInput1"
              placeholder="Please Enter a Career"
              value={this.state.newCol}
              onChange={this.inputChangeHandler2}
            />
            <Button color="default" outline type="submit">Submit</Button>
            </FormGroup>
            </Col>
            </Row>
          </Form>
          <Form onSubmit={this.submitHandler}>
            <Row>
              <Col md="5">
            <Input
              type="text"
              id="content"
              placeholder="Please Enter a Skill"
              className="teste"
              value={this.state.newTask}
              onChange={this.inputChangeHandler}
            />
            <Button color="default" outline type="submit">Submit</Button>
            </Col>
            </Row>
          </Form>
        </div>
        <Droppable droppableId="all-columns" direction="vertical" type="column">
          {(provided) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {this.state.columnOrder.map((columnId, index) => {
                const column = this.state.columns[columnId];

                return (
                  <InnerList
                    key={column.id}
                    column={column}
                    taskMap={this.state.tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default ReorderList;
