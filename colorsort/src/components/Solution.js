const Solution = ({solution}) => {
    return (
        <div>
            {
            solution.map((step) => (
                <div>move number:{step["move_number"]} color:{step["color"]}, source: {step["source"]}, destination: {step["destination"]}</div>
            ))
        }
        </div>
    );
}
 
export default Solution;