import React from "react";
import * as styles from "./index.css";
import Button from "@mui/material/Button";

class ReactDemo extends React.Component {
  render() {
    return (
      <Button variant="contained" className={styles.wrapper}>
        {this.props.name}
      </Button>
    );
  }
}
export default ReactDemo;
