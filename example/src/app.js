import React from "react";
import { render } from "react-dom";
import ReactDemo from "../../src"; // 引入组件

const App = () => <ReactDemo name="这是我自定义的666内容" />;
render(<App />, document.getElementById("root"));
