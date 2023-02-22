import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectButton() {
  const [dis, setDis] = React.useState('');

  const handleChange = (event) => {
    setDis(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 375 }} size="small">
      <InputLabel id="demo-select-small">Member Disabled</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={dis}
        label="Member Disabled"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>Yes</MenuItem>
        <MenuItem value={2}>No</MenuItem>
      </Select>
    </FormControl>
  );
}