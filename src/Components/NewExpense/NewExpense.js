import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [add, setAdd] = useState(false);
  const setAddHandler = () => {
    setAdd(true);
  }
  const stopEditing = () => {
    setAdd(false);
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setAdd(false);
  };

  return (
    <div className="new-expense">
      {!add && <button onClick={setAddHandler}>Add New Expense</button>}
      {add && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
