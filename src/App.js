import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: "Car Insurance",
    amount: 249.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e3',
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: "New Desk (Wooden) ",
    amount: 450,
    date: new Date(2019, 5, 12)
  }
];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  
  const addExpenseHandler = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  )
};

export default App;