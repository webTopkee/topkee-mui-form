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
  //  checkbox: ["gilad","jason","antoine"];
  const validator = new Schema(props.rules);
  const [value, setValue] = useState({});
  const [modelControl, setModelControl] = useState({});
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const newModelControl = {};

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
    setModelControl({ ...newModelControl });
    e.preventDefault();
    validator.validate(value, (errors, fields) => {
      if (errors) {
        for (let key of errors) {
          const obj = { [key.field]: key.message };
          Object.assign(newModelControl, obj);
        }
        setModelControl({ ...newModelControl });
        return errors;
      } else {
        alert(JSON.stringify(value));
      }
    });
  };

  const blur = (item) => {
    let field = item.field;
    if (value[field]) {
      const newObj = {};
      delete modelControl[field];
      Object.assign(newObj, modelControl);
      setModelControl(newObj);
    } else {
      validator.validate({ field: value[field] }, (errors, fields) => {
        if (errors && fields[field]) {
          Object.assign(newModelControl, modelControl, {
            [field]: fields[field][0].message,
          });
          setModelControl({ ...newModelControl });
          return errors;
        }
      });
    }
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log({ [event.target.name]: event.target.checked });
  };

  const handleRadioChange = (event, item) => {
    const obj = { [item.field]: event.target.value };
    Object.assign(value, obj);
    setValue({ ...value });
  };

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
                onBlur={() => {
                  blur(item);
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
                onBlur={() => {
                  blur(item);
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
                onBlur={() => {
                  blur(item);
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
                helperText={
                  modelControl[item.field]
                    ? modelControl[item.field]
                    : item.helperText
                }
                required={getRequired(props.rules[item.field])}
                error={modelControl[item.field] ? true : false}
                variant={item.variant}
                onChange={(e) => {
                  handleTextField(e, item.field);
                }}
                onBlur={() => {
                  blur(item);
                }}
              />
            </FormControl>
          );
        } else if (item.component === "Radio") {
          return (
            <FormControl component="fieldset" error={modelControl[item.field]}>
              <FormLabel component="legend">
                {item.label}
                {getRequired(props.rules[item.field]) ? "*" : ""}
              </FormLabel>
              <RadioGroup
                value={value[item.field]}
                onChange={(e) => {
                  handleRadioChange(e, item);
                }}
              >
                {item.options.map((options) => {
                  return (
                    <FormControlLabel
                      value={options.value}
                      control={<Radio size="small" />}
                      label={options.label}
                    />
                  );
                })}
              </RadioGroup>
              <FormHelperText>
                {modelControl[item.field]
                  ? modelControl[item.field]
                  : item.helperText}
              </FormHelperText>
            </FormControl>
          );
        } else if (item.component === "Checkbox") {
          return (
            <FormControl component="fieldset">
              <FormLabel component="legend">{item.label}</FormLabel>
              <FormGroup>
                {item.options.map((options) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state[options.value]}
                          onChange={handleChange}
                          name={options.value}
                        />
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
