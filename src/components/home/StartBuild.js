import OrangeButton from "../OrangeButton";
import Steps from "./Steps";

const StartBuild = () => {
    return (
        <div className="container">
            <div>
                <p className="large">Build your Tiny Home,<br />Redefine Your Space.</p>
                <Steps text="Take a Free Assessment" />
                <Steps text="Select the Floor Plan" />
                <Steps text="Customize the Amenities" />
                <OrangeButton text="Start Building" />
                <p>We've got you covered from permits to installation. Take a Free<br />Assessment to get your quick estimate now!</p>
            </div>
            <div>
                <img src="layout.png" alt="layout"></img>
            </div>
        </div>
    );
}
 
export default StartBuild;