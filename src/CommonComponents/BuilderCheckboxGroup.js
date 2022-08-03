import React from "react";
import { Checkbox } from "antd";

const children = [
  { value: "first", label: "First" },
  { value: "second", label: "Second" },
  { value: "third", label: "Third" },
];
function BuilderCheckboxGroup() {
  return <Checkbox.Group options={children}></Checkbox.Group>;
}
export default BuilderCheckboxGroup;
