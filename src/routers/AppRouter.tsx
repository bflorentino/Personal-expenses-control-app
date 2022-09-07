import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ExpensesControlRouter from './ExpensesControlRouter'

const AppRouter = () => {
  return (
    <Router> 
        <Routes>
            <Route path='/' element={<Navigate to= 'ExpensesControl/expenseView' />}/>
            <Route path='ExpensesControl/*' element={<ExpensesControlRouter />} />
        </Routes>
    </Router>
  )
}

export default AppRouter