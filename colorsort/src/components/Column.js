import './Column.css'

const Column = (props) => {
const handleClick = (event,color) => {
    event.target.style.backgroundColor = color
}
return (
    <div className="column">
        <div className="circle4" onClick={(event)=> handleClick(event, props.currentColor)}>    
        </div>
        <div className="circle3" onClick={(event)=> handleClick(event, props.currentColor)}>    
        </div>
        <div className="circle2" onClick={(event)=> handleClick(event, props.currentColor)}>    
        </div>
        <div className="circle4" onClick={(event)=> handleClick(event, props.currentColor)}>    
        </div>
    </div>
);
}

export default Column;