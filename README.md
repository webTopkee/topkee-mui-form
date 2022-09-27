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
|属性|默认值|可选值|说明|
|----|-----|------|-----|
|schemas|-|-|创建表单类型|
|rules|-|-|校验规则基于async-validator|
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
]
```

## Rules
表单校验配置
```js
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
```



## Component 内组件的可选类型
```js
'Input'
'InputPassword'
'InputTextArea'
'InputNumber'
```

## License
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui/material-ui/blob/HEAD/LICENSE)