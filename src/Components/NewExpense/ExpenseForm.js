import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (enteredTitle.trim() === "" || enteredAmount.trim() === "" || enteredDate === "") {
      // If any field is empty, don't proceed with form submission
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setIsSubmitted(false);
  };

  const cancelHandler = () => {
    props.onCancel();
    setIsSubmitted(false); // Reset the submission state when cancel is clicked
  };

  return (
    <form onSubmit={submitHandler}>
      <h3 className="h3title">Add Your Expense Here</h3>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {isSubmitted && enteredTitle.trim() === "" && (
            <p className="error-message">Title is required</p>
          )}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          {isSubmitted && enteredAmount.trim() === "" && (
            <p className="error-message">Amount is required</p>
          )}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2030-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          {isSubmitted && enteredDate === "" && (
            <p className="error-message">Date is required</p>
          )}
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="new-expense__actions_btn1" type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="new-expense__actions_btn2" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
