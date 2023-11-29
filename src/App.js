import "./App.css";
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";
import Dropdown from "./Components/Dropdown/Dropdown";
import Accordion from "./Components/Accordion/Accordion";
import Table from "./Components/Table/Table";
import Carousel from "./Components/Carousel/Carousel";
import Fetchfile from "./Components/EndpointCalls/Fetchfile";
import Axiosfile from "./Components/EndpointCalls/Axiosfile";

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <Button />
      <br></br>
      <Dropdown />
      <br></br>
      <Table />
      <Accordion />
      <br></br>
      <Carousel />
      <br></br>
      <Fetchfile />
      <br></br>
    </div>
  );
}

export default App;
