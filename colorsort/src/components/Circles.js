import React from 'react';

const Circle = (props) => {
    const handleClick = (event,color) => {
      event.target.style.backgroundColor = color
      props.stacks[props.columnIndex][props.index]=color
      console.log(props.stacks)
    }
  return (
    <div className="circle" onClick={(event)=> handleClick(event,props.currentColor)}></div>
  );
}

export default Circle;