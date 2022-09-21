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
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const { gilad, jason, antoine } = state;

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
      <FormControl variant="standard">
        <TextField label="Standard" variant="standard" />
      </FormControl>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={gilad} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} name="antoine" />}
            label="Antoine Llorca"
          />
        </FormGroup>
      </FormControl>
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
      </FormControl>
      <Button variant="contained">submit</Button>
    </Box>
  );
}
