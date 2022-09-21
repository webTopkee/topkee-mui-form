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

export default function MuiForm(props) {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const { gilad, jason, antoine } = state;

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleTextField = (e) => {
    console.log(e.target.value);
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
                variant="standard"
                onChange={handleTextField}
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

      {/* 
      <FormControl>
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
      <Button variant="contained">submit</Button>
    </Box>
  );
}
