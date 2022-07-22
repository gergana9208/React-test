import { useState } from "react";
import Card from "../UI/Card";
import "./Demos.css";
import DemosList from "./DemosList";



function Demos(props) {
  const [fileterdYear, setfilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredDemos = props.items.filter((demo) => {
    return demo.date.getFullYear().toString() === fileterdYear;
  });
  

  

  return (
    <div>fesdvdvdv
      <Card className="demos">
        <h1>Test</h1>
        <DemosList items={filteredDemos}/>
      </Card>
    </div>
  );
}
export default Demos;