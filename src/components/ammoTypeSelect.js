import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'AMM',
    label: 'ammo',
  },
  {
    value: 'VEHICLE',
    label: 'cars',
  },
];

export default function SelectTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0.5, width: '12ch' },
      }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="AMM"
          size="small"
          /* helperText="Please select type" */
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
