import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const dataToPass = "Hello from Parent!";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent dataFromParent={dataToPass} />
    </div>
  );
}

export default ParentComponent;
