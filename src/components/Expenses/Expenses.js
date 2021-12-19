import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onChangeFilter = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpense = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilter}/>
        <ExpensesList expenses={filteredExpense}/>
      </Card>
    </li>
  )
}

export default Expenses;