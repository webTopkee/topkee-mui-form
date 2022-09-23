import React from "react";
import { render } from "react-dom";
import MuiForm from "../../src"; // 引入组件

const schemas = [
  {
    field: "a1",
    component: "Input",
    label: "输入框",
    variant: "standard",
    required: true,
  },
  {
    field: "a2",
    component: "InputPassword",
    label: "密码",
    variant: "standard",
    required: true,
    helperText: "带*_+字母+数字组合",
  },
  {
    field: "a3",
    component: "InputTextArea",
    label: "多行文本",
    rows: 4,
    variant: "outlined",
  },
  {
    field: "a4",
    component: "InputNumber",
    label: "数字",
    variant: "outlined",
  },

  // {
  //   field: "field2",
  //   component: "Checkbox",
  //   label: "字段二",
  //   options: [
  //     {
  //       label: "选项一",
  //       value: "1",
  //     },
  //     {
  //       label: "选项二",
  //       value: "2",
  //     },
  //     {
  //       label: "选项三",
  //       value: "3",
  //     },
  //   ],
  // },
];

const App = () => <MuiForm schemas={schemas} />;
render(<App />, document.getElementById("root"));
