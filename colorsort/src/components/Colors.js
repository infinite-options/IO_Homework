import './Colors.css'
const Colors = (props) => {
    const handleClick = () => {
        props.setCurrColor(props.color)
    }
    return (
        <button className="color" style={{backgroundColor: props.color}} onClick={handleClick}>{props.color}</button>
    );
}
 
export default Colors;