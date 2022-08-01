import React, { useState } from "react";
import { Input, Modal, Form } from "antd";
import { MinusCircleOutlined, EditOutlined } from "@ant-design/icons";

const BuilderInput = (props) => {
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
    console.log("input drag", e);
    props.setElemMove(ref);
    props.setCreatingNew(true);
    props.setOptionIndex(props.index);
  };
  const handleMoveStart = (e) => {
    props.setElemMove(ref);
    props.setOptionIndex(props.index);
  };

  //delete controls
  const handleDelete = () => {
    props.handleDelete(props.index);
  };
  return (
    <label
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
      {props.label}
      <Input placeholder={props.placeholder} />
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

      {/* Modal and form for updating */}
      <Modal visible={showModal} onCancel={handleCancel} onOk={handleSubmit}>
        <Form
          initialValues={{
            label: props.label,
            name: props.name,
            placeholder: props.placeholder,
          }}
          onFieldsChange={handleChange}
        >
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="label" label="Label">
            <Input />
          </Form.Item>
          <Form.Item name="placeholder" label="Placeholder">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </label>
  );
};
export default BuilderInput;
