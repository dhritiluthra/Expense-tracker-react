
import './App.css'
import ContextMenu from './Components/ContextMenu'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'

function App() {

  return (
    <div className="expense-tracker">
      <ExpenseForm/>
      <ExpenseTable/>
    </div>
  )
}

export default App
