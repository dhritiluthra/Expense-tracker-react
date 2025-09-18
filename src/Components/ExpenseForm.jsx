import React from "react";

export default function ExpenseForm() {
  return (
    <main>
      <h1>Track Your Expense</h1>

      <form className="expense-form">
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <input id="category" />
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input id="amount" />
        </div>
        <button className="add-btn button">Add</button>
      </form>
    </main>
  );
}
