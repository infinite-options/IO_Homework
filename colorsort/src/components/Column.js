import './Column.css'
import Circles from './Circles'
import { useState, useEffect } from 'react';


const Column = (props) => {

const [circles, setCircles] = useState([])

const createCircles = () => {
    const newCircles = [];
    for(let i = 0; i < 4; i++) {
        newCircles.push(<Circles index={3-i} currentColor={props.currentColor} columnIndex={props.index} stacks={props.stacks}/>)
    }
    setCircles(newCircles)
}

useEffect(() => {
    createCircles()
}, [props.currentColor])

return (
    <div className="column">
        {circles}
        {props.index+1}
    </div>
);
}

export default Column;