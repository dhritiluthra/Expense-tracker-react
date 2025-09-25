import { useState } from "react";
import "./App.css";
import ContextMenu from "./Components/ContextMenu";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseTable from "./Components/ExpenseTable";
import expenseData from "./expenseData";

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  const [newExpense, setNewExpense] = useState({
    title: "",
    category: "",
    amount: "",
    // email: "",
  });
  const [editingRowId, setEditingRowId] = useState("");
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
