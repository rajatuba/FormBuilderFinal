import React, { useEffect, useState } from "react";
import FormInputOptions from "./FormInputOptions";

import { OPTIONLIST } from "./OptionElementList";

function BuilderBox(props) {
  //useState
  //console.log("props app copy", props);
  const [creatingNew, setCreatingNew] = useState(false);
  const [elemMove, setElemMove] = useState();
  const [optionIndex, setOptionIndex] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([...props.list]);
  }, [props.current]);

  useEffect(() => {
    props.updateList(list);
  }, [list]);

  //drop box ref
  const dropRef = React.useRef();

  //final result
  const handleResult = () => {
    console.log("list", list);
  };

  //updating elements data
  const handleUpdate = (data, index) => {
    let updateList = [...list];
    updateList[index] = data;
    setList(updateList);
  };

  //drop control
  const handleDrop = (e) => {
    console.log("drop");
    e.preventDefault();
    let leftX = e.pageX + "px";
    let topY = e.pageY + "px";
    if (creatingNew) {
      let newElem = {
        left: leftX,
        top: topY,
        ...OPTIONLIST[optionIndex],
        move: true,
      };
      setList([...list, newElem]);
      setCreatingNew(false);
    } else {
      //console.log("index", optionIndex);
      elemMove.current.style.left = e.pageX + "px";
      elemMove.current.style.top = e.pageY + "px";
      let elem = list[optionIndex];
      elem.top = e.pageY + "px";
      elem.left = e.pageX + "px";
      handleUpdate(elem, optionIndex);
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "all";
  };

  //deleting element
  const handleDelete = (e) => {
    let temp = [...list];
    temp.splice(e, 1);
    setList(temp);
  };

  return (
    <div className="testContainer">
      {/*Drop Box*/}
      <div
        className="dropContainer"
        ref={dropRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {list?.map((item, key) => {
          console.log("item map", item);
          return React.createElement(item.component, {
            ...item,
            item: item,
            setElemMove,
            index: key,
            handleDelete,
            key: key,
            handleUpdate,
            setOptionIndex,
          });
        })}
      </div>
      {/*Option Box */}
      <div>
        <FormInputOptions
          setElemMove={setElemMove}
          setCreatingNew={setCreatingNew}
          setOptionIndex={setOptionIndex}
        />
      </div>
      {/* Final Result */}
      <button className="resultButton" onClick={handleResult}>
        Final Result
      </button>
    </div>
  );
}
export default BuilderBox;
