import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormBuilder from "./FormBuilder";
import FormGenerator from "./FormGenerator";

function App() {
  const [data, setData] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormBuilder setData={setData} />} />
        <Route path="/formGenerator" element={<FormGenerator data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
