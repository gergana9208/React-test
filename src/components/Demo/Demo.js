import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "../UI/Card";
import DemoFilter from "./DemoFilter";
import "./Demo.css";
import "./DemoFilter.css"




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#808080",
    fontWeight: 600,
    textAlign: "left",
    border: "1px solid rgb(220, 214, 214)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 600,
    textAlign: "left",
    border: "1px solid rgb(220, 214, 214)",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    textAlign: "left",
  },
  // hide last border
  "&:last-child td, &:last-child th": {},
}));

function createData(name, sport, description, emptycol) {
  return { name, sport, description, emptycol };
}

const rows = [
  createData("Mc Donald's Cup 2022", "Football", "Mc Donald's Cup 2022", ""),
  createData("Mc Donald's Cup 2021", "Football", "Mc Donald's Cup"),
  createData("Mc Donald's Cup 2020", "Football", "The Mc Donald's Cup"),
  createData("Mc Donald's Cup 2019", "Football", "Mc Donald's Cup"),
  createData(
    "Mc Donald's Cup 2018",
    "Football",
    "The Return of Mc Donald's Cup"
  ),
];




export default function CustomizedTables() {
  return (
    <Card className="expenses">
      <div>
        <h2 className="title">Mc Donalds's Cup List</h2>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Sport</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.sport}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.emptycol}
                  <div>
                    <button className="action" align="right">&#9660;Actions</button> 
                  </div>
                  
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="buttons">
        <div>
          <button className="create">Create new Cup</button>
        </div>
        <div>
          <button className="choose">Choose file</button>
        </div>
        <div>
          <button className="import">Import</button>
        </div>
      </div>
     
      <DemoFilter/>
      
     
     
    </Card>
  );
}
