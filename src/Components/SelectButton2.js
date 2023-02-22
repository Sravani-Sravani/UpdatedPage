import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectButton2() {
  const [relation, setRelation] = React.useState('');

  const handleChange = (event) => {
    setRelation(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 375 }} size="small">
      <InputLabel id="demo-select-small">Relation</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={relation}
        label="Relation"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>Son</MenuItem>
        <MenuItem value={2}>Daughter</MenuItem>
        <MenuItem value={3}>Father</MenuItem>
        <MenuItem value={3}>Mother</MenuItem>
        <MenuItem value={3}>Wife</MenuItem>
      </Select>
    </FormControl>
  );
}