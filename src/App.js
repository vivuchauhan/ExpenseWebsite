import "./App.css";
import React, {useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

 const DUMMY__EXPENSES = [
   {
     id: "e1",
     title: "Books",
     amount: 94.12,
     date: new Date(2020, 7, 14),
   },
   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
   {
     id: "e3",
     title: "Car Insurance",
     amount: 294.67,
     date: new Date(2021, 2, 28),
   },
   {
     id: "e4",
     title: "New Desk (Wooden)",
     amount: 450,
     date: new Date(2022, 5, 12),
   },
   {
    id: "e5",
    title: "Bike",
    amount: 105450,
    date: new Date(2022, 1, 12),
  },
  {
    id: "e6",
    title: "Bottle",
    amount: 150,
    date: new Date(2023, 6, 12),
  },
  {
    id: "e5",
    title: "Book",
    amount: 450,
    date: new Date(2023, 8, 12),
  },
 ];
 
const App = () => {
  const [expenses,setExpenses]=useState(DUMMY__EXPENSES);
 
    const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense,...prevExpenses]
      });
    };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
