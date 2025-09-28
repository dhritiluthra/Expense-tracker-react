import { useState } from "react";
import "./App.css";
import ContextMenu from "./Components/ContextMenu";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseTable from "./Components/ExpenseTable";
import expenseData from "./expenseData";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [expenses, setExpenses] = useLocalStorage("expenseData",expenseData);
  const [newExpense, setNewExpense] = useLocalStorage("ExpenseFieldInputs",{
    title: "",
    category: "",
    amount: "",
    // email: "",
  });
  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId","");

  return (
    <div className="expense-tracker">
      <ExpenseForm
        setExpenses={setExpenses}
        newExpense={newExpense}
        setNewExpense={setNewExpense}
        editingRowId={editingRowId}
        setEditingRowId={setEditingRowId}
      />
      <ExpenseTable
        expenses={expenses}
        setExpenses={setExpenses}
        setNewExpense={setNewExpense}
        setEditingRowId={setEditingRowId}
      />
    </div>
  );
}

export default App;
