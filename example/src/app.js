import React from "react";
import { render } from "react-dom";
import MuiForm from "../../src"; // 引入组件

const name = "weber";

const App = () => <MuiForm name={name} />;
render(<App />, document.getElementById("root"));
