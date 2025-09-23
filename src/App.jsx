
import { useState } from 'react'
import './App.css'
import ContextMenu from './Components/ContextMenu'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import expenseData from "./expenseData";

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  return (
    <div className="expense-tracker">
      <ExpenseForm setExpenses={setExpenses}/>
      <ExpenseTable expenses={expenses}/>
      
    </div>
  )
}

export default App
