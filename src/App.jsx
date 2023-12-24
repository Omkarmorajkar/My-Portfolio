import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./component/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
