import Expenses from "./components/Expenses/Expenses";
import "./components/UI/Card.css";
import { useState } from "react";
import Demo from "./components/Demo/Demo";
import NewExpense from "./components/NewExpense/NewExpense";
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


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <Demo></Demo>
       

      </header>

      
    </div>
  );
};


export default App;
