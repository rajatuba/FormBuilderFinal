import { Upload } from "antd";
import React, { useState } from "react";

const BuilderFileSelect = (props) => {
  //elem ref
  const ref = React.useRef();

  const handleDragStart = (e) => {
    props.setElemMove(ref);
    props.setCreatingNew(true);
    props.setOptionIndex(props.index);
  };
  const handleMoveStart = (e) => {
    props.setElemMove(ref);
    props.setOptionIndex(props.index);
  };
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
      <Upload></Upload>
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
    </div>
  );
};
