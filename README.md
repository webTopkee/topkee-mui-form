基于[mui](https://mui.com/)实现Form表单组件包   

## 安装
```
npm i topkee-mui-form
```

## 引用
```js
import MuiForm from "topkee-mui-form";
<MuiForm schemas={schemas} rules={rules} />
```

## Props
|属性|类型|默认值|可选值|说明|
|----|----|-----|------|-----|
|schemas|object|-|-|创建表单类型|
|rules|object|-|-|校验规则基于async-validator|
|formData|object|-|-|数据|
## schemas
表单配置参数
```js
const Schemas = [
  {
    field: "name",
    component: "Input",
    label: "用户名",
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
]
```

## Rules
表单校验配置
```js
const rules = {
  name: { required: true, message: "请输入账号" },
  email: {
    required: false,
    message: "请输入邮箱地址",
  },
  pwd: { required: true, message: "请输入密码" },
  text: { required: false, message: "请输入多行文本" },
  number: { required: true, message: "请输入数字" },
  radio: { required: true, message: "请选择性别" },
  checkbox: { required: true, message: "请选择兴趣" },
};
```



## Component 内组件的可选类型
```js
"Input"
"InputPassword"
"InputTextArea"
"InputNumber"
"Radio"
"checkbox"
```

## License
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui/material-ui/blob/HEAD/LICENSE)