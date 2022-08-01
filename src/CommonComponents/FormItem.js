import React from "react";
import { Form, Checkbox, Input } from "antd";

//form item - type ="text"
export const InputItem = (props) => {
  return (
    <Form.Item name={props.name} label={props.label}>
      <Input />
    </Form.Item>
  );
};

//form item - type="checkbox"
export const CheckItem = (props) => {
  return (
    <Form.Item name={props.name} valuePropName="checked">
      <Checkbox>Default Checked</Checkbox>
    </Form.Item>
  );
};
