import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';

const columns = [
  { id: 'name', label: 'Name', minWidth: 10 },
  { id: 'code', label: 'Class', minWidth: 110 },
  {
    id: 'wantedLevel',
    label: 'Wanted',
    minWidth: 10,
    align: 'right',
    sortable: true,
  },
  {
    id: 'size',
    label: 'Zone',
    minWidth: 10,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Distance',
    minWidth: 10,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  { id: 'status', label: 'Status', minWidth: 10 },
];

function createData(name, code, wantedLevel, size, status) {
  const density = '0m';
  return { name, code, wantedLevel, size, density, status };
}

const rows = [
  createData('kipt', 'Robber', 42, 'LS', 'Claimed'),
  createData('SAES>Tombaa', 'CLO', 42, 'LV', 'Unclaimed'),
  createData('jay', 'Racer', 34, 'LS', 'Unclaimed'),
  createData('Zenthynell', 'Drug Dealer', 42, 'SF', 'Claimed'),
  createData('Crash', 'SAHA', 36, 'SA', 'Claimed'),
  createData('SAES>Tilong', 'ZIP', 5, 'SA', 'Claimed'),
  createData('SAES>Rennie', 'CLO', 42, 'LV', 'Unclaimed'),
  createData('Franklin', 'Robber', 42, 'LV', 'Claimed'),
  createData('Michael', 'Drug Dealer', 3, 'SF', 'Claimed'),
];

export default function StickyHeadTable() {
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(10);

  return (
    <Paper sx={{ width: '100%', overflow: 'auto' }}>
      <TableContainer sx={{ maxHeight: 250 }}>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === 'status' ? (
                          <Chip
                            variant="outlined"
                            size="small"
                            label={value}
                            color={value === 'Unclaimed' ? 'success' : 'error'}
                          />
                        ) : column.format && typeof value === 'number' ? (
                          column.format(value)
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
