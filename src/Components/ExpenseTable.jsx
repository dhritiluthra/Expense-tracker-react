import React, { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";
export default function ExpenseTable({
  expenses: expenseData,
  setExpenses: setExpenseData,
  setNewExpense,
  setEditingRowId,
}) {
  const [filteredData, setQuery] = useFilter(
    expenseData,
    (data) => data.category
  );
  const total = filteredData.reduce((sum, current) => {
    return sum + parseInt(current.amount);
  }, 0);

  const [contMenuStyle, setContMenuStyle] = useState({
    left: "",
    top: "",
    display: "none",
  });

  const [rowId, setRowId] = useState("");
  const sortAmountDesc = (e) => {
    // e.stopPropagation();
    setExpenseData((prevState) => {
      return [...prevState].sort((a, b) => {
        return b.amount - a.amount;
      });
    });
  };

  const sortAmountAsc = (e) => {
    console.log("inside sort");
    // e.stopPropagation();
    setExpenseData((prevState) => {
      return [...prevState].sort((a, b) => {
        return a.amount - b.amount;
      });
    });
  };

  return (
    <>
      <ContextMenu
        contextPosition={contMenuStyle}
        setContMenuStyle={setContMenuStyle}
        rowId={rowId}
        setExpenses={setExpenseData}
        setNewExpense={setNewExpense}
        expenses={expenseData}
        setEditingRowId={setEditingRowId}
      />
      <table
        className="expense-table"
        onClick={() => {
          if (contMenuStyle.display != "none") {
            setContMenuStyle((prevState) => {
              return { ...prevState, display: "none" };
            });
          }
        }}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              >
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div className="amount-heading">
                <span>Amount</span>
                <div>
                  <span
                    className="material-symbols-outlined arrow up-arrow"
                    onClick={sortAmountDesc}
                  >
                    arrow_upward_alt
                  </span>
                  <span
                    className="material-symbols-outlined arrow up-arrow"
                    onClick={sortAmountAsc}
                  >
                    arrow_downward_alt
                  </span>
                  <span class="material-symbols-outlined clear-sort" title="Clear Sort">clear_all</span>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((expense) => {
            return (
              <tr
                key={expense.id}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setContMenuStyle({
                    left: e.clientX + 8,
                    top: e.clientY - 3,
                    display: "unset",
                  });
                  setRowId(expense.id);
                }}
              >
                <td>{expense.title}</td>
                <td>{expense.category}</td>
                <td>₹{expense.amount}</td>
              </tr>
            );
          })}
          <tr>
            <th>Total</th>
            <th />
            <th>₹{total}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
