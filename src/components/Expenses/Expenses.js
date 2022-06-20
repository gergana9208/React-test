
import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [fileterdYear, setfilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === fileterdYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={fileterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses= {filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
