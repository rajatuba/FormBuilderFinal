/*import React from "react";

const FormBuilder = (props) => {
  console.log("props builder", props);
  return <div>Form Builder</div>;
};
export default FormBuilder;
*/
import React, { useEffect, useState } from "react";
import { Steps, Button, Modal, InputNumber } from "antd";
import BuilderBox from "./BuilderBox";
import "../styles/FormBuilder.css";

const { Step } = Steps;

function FormBuilder() {
  //state
  const [modalVisible, setModalVisible] = useState(false);
  const [totalSteps, setTotalSteps] = useState(1);
  const [inputNum, setInputNum] = useState(totalSteps);
  const [current, setCurrent] = useState(0);
  const [list, setList] = useState([]);

  /*useEffect(() => {
    console.log("refreshing");
    console.log("current", current);
  }, [current]);
  */

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < totalSteps; i++) {
      temp[i] = [];
    }
    setList(temp);
  }, [totalSteps]);

  //modal controls
  const handleModalShow = () => {
    setModalVisible(true);
  };
  const handleModalCancel = () => {
    setModalVisible(false);
    setInputNum(totalSteps);
  };
  const handleModalSubmit = () => {
    setTotalSteps(inputNum);
    setModalVisible(false);
  };

  //total form parts
  const hanldeTotalPage = (value) => {
    setInputNum(value);
  };

  //current form number
  const handleCurrentChange = (value) => {
    setCurrent(value);
  };

  //updating list
  const updateList = (value) => {
    console.log("updating value", value);
    let temp = [...list];
    temp[current] = value;
    setList(temp);
    console.log("update", temp);
  };

  //final result
  const handleSubmit = () => {
    console.log("final result", list);
    localStorage.setItem("formBuilder", JSON.stringify(list));
  };

  //Step for user to go on form part
  let stepList = [];
  for (let i = 0; i < totalSteps; i++) {
    stepList.push(<Step key={i} />);
  }

  //console.log("list", list);
  return (
    <div className="test2">
      {totalSteps ? (
        <Steps current={current} onChange={handleCurrentChange}>
          {stepList}
        </Steps>
      ) : null}
      <Button type="primary" onClick={handleModalShow}>
        Click to open Modal
      </Button>

      <div className="test2result">
        <BuilderBox
          list={list[current] ? [...list[current]] : []}
          updateList={updateList}
          current={current}
        />
      </div>
      {current === totalSteps - 1 ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : null}
      <Modal
        visible={modalVisible}
        onCancel={handleModalCancel}
        onOk={handleModalSubmit}
      >
        <InputNumber defaultValue={totalSteps} onChange={hanldeTotalPage} />
      </Modal>
    </div>
  );
}
export default FormBuilder;
