
import "./components/UI/Card.css";
import { useState } from "react";

import "./components/Demos/DemosList.css"
import Demos from "./components/Demos/Demos";
import NewDemo from "./components/NewDemo/NewDemo";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";

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

const DUMMY_EXPENENSES = [
  {
    id: "e1",
    title: "telephone",
    sport: "football",
    description: "jdisjfsdion fdivjdjv fjidfjso",
    date: new Date(2020, 45, 34),
  },
  {
    id: "e2",
    title: " fridge",
    sport: "football",
    description: "jdisjfsdion fdivjdjv fjidfjso",
    date: new Date(2019, 4, 12),
  },
];

const App = () => {
    const [demos, setDemos] = useState(DUMMY_EXPENENSES);
    const addDemoHandler = (demo) => {
      setDemos((prevDemos) => {
        return [demo, ...prevDemos];
      });
  };

  return (
    <div className="App">
      <header className="App-header">
       
        <h2 className="demo-list__fallback">Import a new Cup </h2>
        <NewDemo onAddDemo={addDemoHandler}></NewDemo>
        
        <h2 className="title">Mc Donalds's Cup List</h2>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Sport</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
            </TableRow>
          </TableHead>
          </Table>
        </TableContainer>
        
        <Demos items={demos}></Demos>

        
       
      </header>
    </div>
  );
};

export default App;
