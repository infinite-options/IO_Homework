import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./Components/Pages/Table";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
