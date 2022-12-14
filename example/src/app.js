import React from "react";
import { render } from "react-dom";
import MuiForm from "../../src";

const schemas = [
  {
    field: "name",
    component: "Input",
    label: "用户名",
    variant: "standard",
  },
  // {
  //   field: "email",
  //   component: "Input",
  //   label: "邮箱",
  //   variant: "standard",
  // },
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
  {
    field: "radio",
    component: "Radio",
    label: "性别",
    options: [
      {
        label: "男",
        value: "male",
      },
      {
        label: "女",
        value: "female",
      },
    ],
  },
  {
    field: "checkbox",
    component: "Checkbox",
    label: "兴趣",
    options: [
      {
        label: "跑步",
        value: "paobu",
      },
      {
        label: "游泳",
        value: "youyoung",
      },
      {
        label: "打球",
        value: "daqiu",
      },
    ],
  },
];

const rules = {
  // name: [{ required: true, message: "请输入账号" }],
  // email: {
  //   required: false,
  //   message: "请输入邮箱地址",
  // },
  // pwd: { required: true, message: "请输入密码" },
  // text: { required: true, message: "请输入多行文本" },
  // number: { required: true, message: "请输入数字" },
  // radio: { required: true, message: "请选择性别" },
  // checkbox: { required: true, message: "请选择兴趣" },
};

const formData = {
  name: "5434",
  pwd: "234",
  radio: "female",
  checkbox: ["paobu"],
  checkbox2: ["aa", "bb"],
};

const App = () => (
  <>
    <MuiForm schemas={schemas} rules={rules} />
  </>
);
render(<App />, document.getElementById("root"));
