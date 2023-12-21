import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(playerNames, playerDistance) {
  return { playerNames, playerDistance };
}

const rows = [
  createData('[SWAT]Sou', '12m'),
  createData('[SWAT]General', '252m'),
  createData('[FBI]Russell', '3241m'),
  createData('[PARS]Flacko', '331m'),
  createData('[PARS]Phantom', '152m'),
  createData('[SWAT]candi', '241m'),
  createData('[SWAT]Asgal', '33m'),
  createData('[SWAT]Sou', '12m'),
  createData('[SWAT]General', '22m'),
  createData('[FBI]Russell', '3241m'),
  createData('[PARS]Flacko', '334m'),
  createData('[PARS]Phantom', '152m'),
  createData('[SWAT]candi', '241m'),
  createData('[SWAT]Asgal', '1343m'),
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper} sx={{ overflow: 'auto' }}>
      <Table size="small" aria-label="caption table">
        {/* <caption>Current weapons table.</caption> */}
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Distance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.playerNames}>
              <TableCell component="th" scope="row">
                {row.playerNames}
              </TableCell>
              <TableCell>{row.playerDistance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
