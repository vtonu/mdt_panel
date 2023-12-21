import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(playerName, playerLocations) {
  return { playerName, playerLocations };
}

const rows = [
  createData('[SWAT]Skes', 'Downtown Los Santos'),
  createData('SAES>Brophy', 'Blaine County'),
  createData('[FBI]Carter', 'Richman'),
  createData('SAES>Kain', 'Vinewood'),
  createData('[SWAT]Skes', 'Downtown Los Santos'),
  createData('SAES>Brophy', 'Blaine County'),
  createData('[FBI]Carter', 'Richman'),
  createData('SAES>Kain', 'Vinewood'),
  createData('[SWAT]Skes', 'Downtown Los Santos'),
  createData('SAES>Brophy', 'Blaine County'),
  createData('[FBI]Carter', 'Richman'),
  createData('SAES>Kain', 'Vinewood'),
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.playerName}>
              <TableCell component="th" scope="row">
                {row.playerName}
              </TableCell>
              <TableCell>{row.playerLocations}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
