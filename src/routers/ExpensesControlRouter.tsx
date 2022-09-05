import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ExpenseAddPage from '../components/pages/Expenses/ExpenseAddPage'
import ExpenseViewPage from '../components/pages/Expenses/ExpenseViewPage'
import IncomeViewPage from '../components/pages/Incomes/IncomeViewPage'
import IncomeAddPage from '../components/pages/Incomes/IncomeAddPage'

const ExpensesControlRouter = () => {
  return (
    <Routes >
      <Route path='/expenseView' element={<ExpenseViewPage />} />
      <Route path='/expenseAdd' element={<ExpenseAddPage />}/>
      <Route path='/incomeAdd' element={<IncomeViewPage />}/>
      <Route path='/incomeView' element={<IncomeAddPage />}/>
    </Routes>
  )
}

export default ExpensesControlRouter