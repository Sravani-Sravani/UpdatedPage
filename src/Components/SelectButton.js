import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectButton() {
  const [bloodgrp, setBloodgrp] = React.useState('');

  const handleChange = (event) => {
    setBloodgrp(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 375 }} size="small">
      <InputLabel id="demo-select-small">Blood Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={bloodgrp}
        label="Blood Group"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>A Positive</MenuItem>
        <MenuItem value={2}>A Negative</MenuItem>
        <MenuItem value={3}>B Positive</MenuItem>
        <MenuItem value={3}>O Positive</MenuItem>
        <MenuItem value={3}>B Negitive</MenuItem>
      </Select>
    </FormControl>
  );
}