基于[mui](https://mui.com/)实现Form表单组件包   

## 安装
```
npm i topkee-mui-form
```

## 引用
```js
import MuiForm from "topkee-mui-form";

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
  ]

<MuiForm schemas={schemas} />
```
![img](https://webertop.oss-cn-hongkong.topkee.top/u_411116921098997760/202209231555652.png)
## Props
|属性|默认值|可选值|说明|
|----|-----|------|-----|
|schemas|-|-|创建表单类型|

## schemas 内组件的可选类型
```js
'Input'
'InputPassword'
'InputTextArea'
'InputNumber'
```

## License
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui/material-ui/blob/HEAD/LICENSE)