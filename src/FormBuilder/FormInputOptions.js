import React from "react";
import { OPTIONLIST } from "./OptionElementList";

function FormInputOptions(props) {
  return (
    <div className="itemOption">
      {OPTIONLIST.map((item, index) => {
        return React.createElement(item.component, {
          ...item,
          ...props,
          index,
          key: index,
        });
      })}
    </div>
  );
}
export default FormInputOptions;
