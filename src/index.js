import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Schema from "async-validator";

export default function MuiForm(props) {
  const [value, setValue] = useState({});
  const [modelControl, setModelControl] = useState({});

  const handleTextField = (even, field) => {
    const obj = Object.assign(value, { [field]: even.target.value });
    setValue(obj);
  };

  const getRequired = (condition) => {
    if (Object.prototype.toString.call(condition) === "[object Object]") {
      return condition.required;
    } else if (Object.prototype.toString.call(condition) === "[object Array]") {
      let result = condition.some((item) => item.required);
      return result;
    }
    return false;
  };

  const sub = (e) => {
    const obj2 = {};
    setModelControl({ ...obj2 });
    e.preventDefault();
    validator.validate(value, (errors, fields) => {
      if (errors) {
        for (let key of errors) {
          const obj = { [key.field]: key.message };
          Object.assign(obj2, obj);
        }
        setModelControl({ ...obj2 });
        return errors;
      } else {
        console.log(value);
      }
    });
  };

  const validator = new Schema(props.rules);

  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: "grid",
        gap: 2,
      }}
    >
      {props.schemas.map((item) => {
        if (item.component === "Input") {
          return (
            <FormControl variant="standard">
              <TextField
                label={item.label}
                type="text"
                variant={item.variant}
                prop="a1"
                helperText={
                  modelControl[item.field]
                    ? modelControl[item.field]
                    : item.helperText
                }
                required={getRequired(props.rules[item.field])}
                error={modelControl[item.field] ? true : false}
                onChange={(e) => {
                  handleTextField(e, item.field);
                }}
              />
            </FormControl>
          );
        } else if (item.component === "InputPassword") {
          return (
            <FormControl variant="standard">
              <TextField
                label={item.label}
                type="password"
                helperText={
                  modelControl[item.field]
                    ? modelControl[item.field]
                    : item.helperText
                }
                variant={item.variant}
                required={getRequired(props.rules[item.field])}
                error={modelControl[item.field] ? true : false}
                onChange={(e) => {
                  handleTextField(e, item.field);
                }}
              />
            </FormControl>
          );
        } else if (item.component === "InputTextArea") {
          return (
            <FormControl variant="standard">
              <TextField
                label={item.label}
                type="text"
                helperText={
                  modelControl[item.field]
                    ? modelControl[item.field]
                    : item.helperText
                }
                multiline
                required={getRequired(props.rules[item.field])}
                error={modelControl[item.field] ? true : false}
                rows={item.rows ? item.rows : 1}
                variant={item.variant}
                onChange={(e) => {
                  handleTextField(e, item.field);
                }}
              />
            </FormControl>
          );
        } else if (item.component === "InputNumber") {
          return (
            <FormControl variant="standard">
              <TextField
                label={item.label}
                type="number"
                helperText={item.helperText}
                required={getRequired(props.rules[item.field])}
                error={modelControl[item.field] ? true : false}
                variant={item.variant}
                onChange={(e) => {
                  handleTextField(e, item.field);
                }}
              />
            </FormControl>
          );
        } else if (item.component === "Checkbox") {
          return (
            <FormControl component="fieldset" variant="standard">
              <FormLabel component="legend">{item.label}</FormLabel>
              <FormGroup row>
                {item.options.map((options) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox checked={gilad} name={options.value} />
                      }
                      label={options.label}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          );
        }
      })}

      <Button onClick={sub} variant="contained">
        确定
      </Button>
    </Box>
  );
}
