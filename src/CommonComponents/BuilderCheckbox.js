import React, { useState } from "react";
import { Checkbox, Form, Input, Modal } from "antd";
import { MinusCircleOutlined, EditOutlined } from "@ant-design/icons";
import { CheckItem, InputItem } from "./FormItem";

const BuilderCheckbox = (props) => {
  //useState
  const [showModal, setShowModal] = useState(false);
  const [changes, setChanges] = useState(props.item);

  //modal and modal-form Controls
  const handleshowModal = () => {
    setShowModal(true);
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  const handleChange = (changedField) => {
    let change = changes;
    //console.log("changeField", changedField);
    //console.log("change", change);
    change[changedField[0].name[0]] = changedField[0].value;
    setChanges(change);
  };
  const handleSubmit = () => {
    props.handleUpdate(changes, props.index);
    setShowModal(false);
  };

  //element reference
  const ref = React.useRef();

  //drag controls
  const handleDragStart = (e) => {
    props.setElemMove(ref);
    props.setCreatingNew(true);
    props.setOptionIndex(props.index);
  };
  const handleMoveStart = (e) => {
    props.setElemMove(ref);
    props.setOptionIndex(props.index);
  };

  //delete element controls
  const handleDelete = () => {
    props.handleDelete(props.index);
  };
  return (
    <div
      draggable
      onDragStart={props.move ? handleMoveStart : handleDragStart}
      ref={ref}
      style={
        props.move
          ? {
              position: "absolute",
              top: `${props.top}`,
              left: `${props.left}`,
            }
          : null
      }
    >
      <Checkbox value={props.value} checked={props.defaultChecked}>
        {props.name}
      </Checkbox>
      {props.move ? (
        <>
          <button onClick={handleDelete}>
            <MinusCircleOutlined />
          </button>
          <button onClick={handleshowModal}>
            <EditOutlined />
          </button>
        </>
      ) : null}

      {/* Modal and form for updating values */}
      <Modal visible={showModal} onCancel={handleCancel} onOk={handleSubmit}>
        <Form
          initialValues={{
            value: props.value,
            name: props.name,
            defaultChecked: props.defaultChecked,
          }}
          onFieldsChange={handleChange}
        >
          <InputItem name="name" label="Name" />
          <InputItem name="value" label="Value" />
          <CheckItem name="defaultChecked" />
        </Form>
      </Modal>
    </div>
  );
};
export default BuilderCheckbox;
