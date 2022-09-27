import React from "react";
import { render } from "react-dom";
import MuiForm from "../../src"; // 引入组件

const schemas = [
  {
    field: "name",
    component: "Input",
    label: "用户名",
    variant: "standard",
  },
  {
    field: "email",
    component: "Input",
    label: "邮箱",
    variant: "standard",
  },
  {
    field: "pwd",
    component: "InputPassword",
    label: "密码",
    variant: "standard",
    helperText: "带*_+字母+数字组合",
  },
  {
    field: "text",
    component: "InputTextArea",
    label: "多行文本",
    rows: 4,
    variant: "standard",
  },
  {
    field: "number",
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
  name: [
    { required: true, message: "请输入账号" },
    { required: false, min: 2, max: 5, message: "请输入2-5长度用户名" },
  ],
  email: {
    required: false,
    message: "请输入邮箱地址",
  },
  pwd: { required: true, message: "请输入密码" },
  text: { required: false, message: "请输入多行文本" },
  number: { required: true, message: "请输入数字" },
};

const sub = () => {
  console.log("提交");
};

const App = () => (
  <>
    <MuiForm schemas={schemas} rules={rules} />
  </>
);
render(<App />, document.getElementById("root"));
