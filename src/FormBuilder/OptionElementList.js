import BuilderInput from "../CommonComponents/BuilderInput";
import BuilderTextarea from "../CommonComponents/BuilderTextarea";
import BuilderRadio from "../CommonComponents/BuilderRadio";
import BuilderCheckbox from "../CommonComponents/BuilderCheckbox";

export const OPTIONLIST = [
  {
    type: "text",
    placeholder: "Single Line Text Input",
    label: "Input label",
    component: BuilderInput,
    name: "text",
  },
  {
    type: "textarea",
    placeholder: "Multiple Line Text Input",
    label: "TextArea Label",
    component: BuilderTextarea,
    name: "textarea",
  },
  {
    type: "radio",
    component: BuilderRadio,
    name: "radio",
    value: "radio",
    defaultChecked: false,
  },
  {
    type: "checkbox",
    component: BuilderCheckbox,
    name: "checkbox",
    value: "checkbox",
    defaultChecked: false,
  },
];
