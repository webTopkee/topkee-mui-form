import React from "react";
import { render } from "react-dom";
import MuiForm from "../../src"; // 引入组件

const schemas = [
  {
    field: "field1",
    component: "Input",
    label: "字段一",
  },
  {
    field: "field2",
    component: "Checkbox",
    label: "字段二",
    options: [
      {
        label: "选项一",
        value: "1",
      },
      {
        label: "选项二",
        value: "2",
      },
      {
        label: "选项三",
        value: "3",
      },
    ],
  },
];

const App = () => <MuiForm schemas={schemas} name="laaaa" />;
render(<App />, document.getElementById("root"));
