import React, { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import Card from "../UI/card";
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";
import ExpensesLit from "./ExpensesLit";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesLit item={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
