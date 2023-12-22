import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./component/Home";
import About from "./component/About";
import AppLayout from "./component/AppLayout";
import Project from "./component/Project";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
