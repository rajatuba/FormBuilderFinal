import React, { useState } from "react";
import { Input, Modal, Form } from "antd";
import { MinusCircleOutlined, EditOutlined } from "@ant-design/icons";
import { InputItem } from "./FormItem";
const { TextArea } = Input;

const BuilderTextarea = (props) => {
  //useState
  const [showModal, setShowModal] = useState(false);
  const [changes, setChanges] = useState(props.item);

  //modal and modal-form controls
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

  //element ref
  const ref = React.useRef();

  //drag control
  const handleDragStart = (e) => {
    props.setElemMove(ref);
    props.setCreatingNew(true);
    props.setOptionIndex(props.index);
  };
  const handleMoveStart = (e) => {
    props.setElemMove(ref);
    props.setOptionIndex(props.index);
  };

  //delete control
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
      <TextArea placeholder={props.placeholder}></TextArea>
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
          <InputItem name="name" label="name" />
          <InputItem name="label" label="Label" />
          <InputItem name="placeholder" label="Placeholder" />
        </Form>
      </Modal>
    </label>
  );
};
export default BuilderTextarea;
