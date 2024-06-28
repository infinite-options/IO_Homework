const Steps = ({text}) => {
    return (
        <div className="steps">
            <img src="check.png" alt="check"></img>
            <p className="step">{text}</p>
        </div>
    );
}
 
export default Steps;