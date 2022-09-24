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

  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const { gilad, jason, antoine } = state;

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(value);
  };

  const handleTextField = (even, field) => {
    const obj = Object.assign(value, { [field]: even.target.value });
    setValue(obj);
  };

  const rules = {
    a1: { required: true, message: "请输入账号" },
    a2: { required: true, message: "请输入密码" },
  };

  const sub = (e) => {
    // validator.validate({ a1: value.a1 }, (errors, fields) => {
    //   if (errors && fields.a1) {
    //     console.log(fields.a1[0].message);
    //     return errors;
    //   }
    // });

    e.preventDefault();
    validator.validate(value, (errors, fields) => {
      if (errors) {
        for (let key of errors) {
          console.log(key.message);
        }
        return errors;
      } else {
        console.log(value);
      }
    });
  };

  const validator = new Schema(rules);

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
                error
                label={item.label}
                type="text"
                variant={item.variant}
                helperText={item.helperText}
                required={item.required ? true : false}
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
                helperText={item.helperText}
                variant={item.variant}
                required={item.required ? true : false}
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
                helperText={item.helperText}
                multiline
                required={item.required ? true : false}
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
                required={item.required ? true : false}
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

      {/* <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select value={age} label="Age" onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
      <Button onClick={sub} variant="contained">
        确定
      </Button>
    </Box>
  );
}
