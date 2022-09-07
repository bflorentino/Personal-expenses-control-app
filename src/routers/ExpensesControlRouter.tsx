import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ExpenseAddPage from '../components/pages/Expenses/ExpenseAddPage'
import ExpenseViewPage from '../components/pages/Expenses/ExpenseViewPage'
import IncomeViewPage from '../components/pages/Incomes/IncomeViewPage'
import IncomeAddPage from '../components/pages/Incomes/IncomeAddPage'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import SidebarModal from '../components/modals/SidebarModal'
import { useAppSelector } from '../hooks/reduxhooks'

const ExpensesControlRouter = () => {

  const opened = useAppSelector(state => state.sidebar.open) 

  return (
    <>
    {
      opened && <SidebarModal />
    }
    <Header/>
    <Sidebar />
      <Routes >
        <Route path='/expenseView' element={<ExpenseViewPage />} />
        <Route path='/expenseAdd' element={<ExpenseAddPage />}/>
        <Route path='/incomeAdd' element={<IncomeViewPage />}/>
        <Route path='/incomeView' element={<IncomeAddPage />}/>
      </Routes>
    </>
  )
}

export default ExpensesControlRouter