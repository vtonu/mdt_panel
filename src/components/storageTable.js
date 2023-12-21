import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(weaponType, ammoType) {
  return { weaponType, ammoType };
}

const rows = [
  createData('Nightstick', 1),
  createData('Silenced', 250),
  createData('Shotgun', 300),
  createData('Grenade', 3),
  createData('Nightstick', 1),
  createData('Silenced', 250),
  createData('Shotgun', 300),
  createData('Grenade', 300),
  createData('Prachute', 1),
  createData('MP5', 241),
  createData('M4', 333),
  createData('SMG Mk II', 1333),
  createData('SMG Mk I', 13),
  createData('Nightstick', 1),
  createData('Silenced', 250),
  createData('Shotgun', 300),
  createData('Grenade', 300),
  createData('Prachute', 1),
  createData('MP5', 241),
  createData('M4', 333),
  createData('SMG Mk II', 1333),
  createData('SMG Mk I', 13),
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="caption table">
        {/* <caption>Storage table.</caption> */}
        <TableHead>
          <TableRow>
            <TableCell>Weapon</TableCell>
            <TableCell>Ammo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.weaponType}>
              <TableCell component="th" scope="row">
                {row.weaponType}
              </TableCell>
              <TableCell>{row.ammoType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
