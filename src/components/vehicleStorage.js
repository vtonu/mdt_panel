import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein, status) {
  return { name, calories, fat, carbs, protein, status };
}

const rows = [
  createData('12', 'Cheetah', 1000, 25, '$0', 'Stored'),
  createData('11', 'Sultan', 712, 37, '$1,440', 'Stored'),
  createData('42', 'NRG-500', 1000, 15, '$0', 'Stored'),
  createData('25', 'Bullet', 1000, 50, '$0', 'Stored'),
  createData('13', 'Infernus', 1000, 50, '$0', 'Stored'),
  createData('15', 'Jester', 1000, 45, '$0', 'Stored'),
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        {/*  <caption>Vehicle storage table.</caption> */}
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Names</TableCell>
            <TableCell align="right">Health</TableCell>
            <TableCell align="right">Fuel</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
