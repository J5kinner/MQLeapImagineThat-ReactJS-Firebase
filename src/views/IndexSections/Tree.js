import React, { useState, useRef } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Handle
} from "react-flow-renderer";
import "../IndexSections/treeStyle.css";

import Sidebar from "../IndexSections/sidebar.js";

const InputNode = ({ data }) => {
  return (
    <>
      <Handle type="source" position="right" id="a" />
    </>
  );
};

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Your Name", value: "" },
    position: { x: 250, y: 5 }
  }
];
let id = 0;
const getId = () => `dndnode_${id++}`;

export default function App() {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);

  const [objectEdit, setObjectEdit] = useState({});
  const onElementClick = (event, object) => {
    setObjectEdit(object);
  };

  const onPaneClick = () => {
    setObjectEdit({});
  };
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };
  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top
    });

    const newNode = {
      id: getId(),
      type,
      position,
      data: { value: "", label: "" },
      style: { padding: 10, width: 150 }
    };
    setElements((es) => es.concat(newNode));
  };
  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div
          className="reactflow-wrapper"
          style={{ height: "100vh", width: "80vw" }}
          ref={reactFlowWrapper}
        >
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            deleteKeyCode={46}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onElementClick={onElementClick}
            onPaneClick={onPaneClick}
          >
            <Controls />
          </ReactFlow>
        </div>
        <div className="dndnode">
          {objectEdit.type === "default" && (
            <input
              value={objectEdit.data.value}
              onChange={(e) => {
                setObjectEdit({
                  ...objectEdit,
                  data: {
                    ...objectEdit.data,
                    value: e.target.value,
                    label: e.target.value
                  }
                });

                const newElement = elements.map((item) => {
                  if (item.id === objectEdit.id) {
                    return {
                      ...item,
                      data: {
                        ...item.data,
                        value: e.target.value,
                        label: e.target.value
                      }
                    };
                  }
                  return item;
                });

                setElements(newElement);
              }}
            />
          )}
        </div>
        <div >
          {objectEdit.type === "output" && (
            <input
              value={objectEdit.data.value}
              onChange={(e) => {
                setObjectEdit({
                  ...objectEdit,
                  data: {
                    ...objectEdit.data,
                    value: e.target.value,
                    label: e.target.value
                  }
                });

                const newElement = elements.map((item) => {
                  if (item.id === objectEdit.id) {
                    return {
                      ...item,
                      data: {
                        ...item.data,
                        value: e.target.value,
                        label: e.target.value
                      }
                    };
                  }
                  return item;
                });

                setElements(newElement);
              }}
            />
          )}
        </div>
        <div style={{ textAlign: "left", padding: 10 }}>
          {objectEdit.type === "input" && (
            <input
              value={objectEdit.data.value}
              onChange={(e) => {
                setObjectEdit({
                  ...objectEdit,
                  data: {
                    ...objectEdit.data,
                    value: e.target.value,
                    label: e.target.value
                  }
                });

                const newElement = elements.map((item) => {
                  if (item.id === objectEdit.id) {
                    return {
                      ...item,
                      data: {
                        ...item.data,
                        value: e.target.value,
                        label: e.target.value
                      }
                    };
                  }
                  return item;
                });

                setElements(newElement);
              }}
            />
          )}
        </div>
        <Sidebar />
        
      </ReactFlowProvider>
    </div>
  );
}
