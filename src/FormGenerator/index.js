import React, { useState } from "react";

const FormGenerator = (props) => {
  const [list, setList] = useState([]);
  const handleList = () => {
    let temp = localStorage.getItem("formBuilder");
    temp = JSON.parse(temp);
    console.log("temp", temp);
    setList(temp);
  };
  console.log("list generated", list);
  return (
    <div>
      Form generator
      <button onClick={handleList}>Form List</button>
    </div>
  );
};
export default FormGenerator;
