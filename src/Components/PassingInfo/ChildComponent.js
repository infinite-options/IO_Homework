import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Data from Parent: {props.dataFromParent}</p>
    </div>
  );
}

export default ChildComponent;
