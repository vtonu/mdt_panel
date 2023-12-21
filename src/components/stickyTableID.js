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
  { id: 'name', label: 'ID', minWidth: 10 },
  { id: 'code', label: 'Names', minWidth: 10 },
  {
    id: 'population',
    label: 'Health',
    minWidth: 10,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Fuel',
    minWidth: 10,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Cost',
    minWidth: 10,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  { id: 'status', label: 'Status', minWidth: 10 },
];

function createData(name, code, population, size, status) {
  const density = '$0';
  return { name, code, population, size, density, status };
}

const rows = [
  createData('12', 'Cheetah', 1000, 25, 'Spawned'),
  createData('31', 'Sultan', 712, 37, 'Spawned'),
  createData('42', 'NRG-500', 738, 15, 'Spawned'),
  createData('31', 'Bullet', 1000, 100, 'Stored'),
  createData('11', 'Infernus', 234, 22, 'Spawned'),
  createData('75', 'Jester', 1000, 66, 'Spawned'),
  createData('23', 'Tank', 1000, 66, 'Stored'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
                            color={value === 'Stored' ? 'success' : 'error'}
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
