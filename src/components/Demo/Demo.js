import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '../UI/Card';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    paddingLeft: '30px',
  },
}));

function createData(name, sport, description) {
  return { name, sport, description };
}

const rows = [
  createData('Frozen yoghurt', 'Football', 4.0),
  createData('Ice cream sandwich', 'Tennis', 4.3),
  createData('Eclair', 'Swimming', 6.0),
  createData('Cupcake', 'Football', 7.9),
  createData('Gingerbread', 'Football', 3.9),
];

export default function CustomizedTables() {
  return (
    <li>
      <Card className="expenses">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Sport</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.sport}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    </li>
  );
}
