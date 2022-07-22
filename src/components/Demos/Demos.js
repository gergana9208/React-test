import { useState } from "react";
import Card from "../UI/Card";
import "./Demos.css";
import DemosList from "./DemosList";

const DUMMY_EXPENENSES = [
  {
    id: "e1",
    title: "telephone",
    sport: 'football',
    description:'jdisjfsdion fdivjdjv fjidfjso',
    amount: "45.34",
    date: new Date(2020, 45, 34),
  },
  {
    id: "e2",
    title: " fridge",
    sport: 'football',
    description:'jdisjfsdion fdivjdjv fjidfjso',
    amount: "30.78",
    date: new Date(2019, 4, 12),
  },
];

function Demos(props) {
  const [demos, setDemos] = useState(DUMMY_EXPENENSES);
    const addDemoHandler = (demo) => {
      setDemos((prevDemos) => {
        return [demo, ...prevDemos];
      });
  };


  

  return (
    <div>
      <Card className="demos">
        <h1>Test</h1>
        <DemosList items={DUMMY_EXPENENSES}/>
      </Card>
    </div>
  );
}
export default Demos;