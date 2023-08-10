import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesLit = (props) => {
    if (props.item.length === 0) {
      return <h2 expenses-list__fallback>No expenses Found</h2>
  }
  return (
    <ul className="expense-list">
          {
              props.item.map((expense) => {
                  return (
                    <ExpenseItem
                      key={expense.id}
                      title={expense.title}
                      amount={expense.amount}
                      date={expense.date}
                    />
                  );
              })
      }
      
    </ul>
  );
};

export default ExpensesLit;
