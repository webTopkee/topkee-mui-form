import React from "react";
import { render } from "react-dom";
import MuiForm from "../../src"; // 引入组件

const schemas = [
  {
    field: "a1",
    component: "Input",
    label: "输入框",
    variant: "standard",
  },
  {
    field: "pwd",
    component: "InputPassword",
    label: "密码",
    variant: "standard",
    // helperText: "带*_+字母+数字组合",
  },
  {
    field: "a3",
    component: "InputTextArea",
    label: "多行文本",
    rows: 4,
    variant: "standard",
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
  //     },`
  //   ],
  // },
];

const rules = {
  a1: { required: true, message: "请输入账号" },
  pwd: { required: true, message: "请输入密码" },
  a3: { required: true, message: "请输入多行文本" },
};

const App = () => (
  <>
    <MuiForm schemas={schemas} rules={rules} />
  </>
);
render(<App />, document.getElementById("root"));
