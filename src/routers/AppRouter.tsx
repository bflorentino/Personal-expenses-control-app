import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExpensesControlRouter from './ExpensesControlRouter'

const AppRouter = () => {
  return (
    <Router> 
        <Routes>
            <Route path='/' />
            <Route path='ExpensesControl/*' element={<ExpensesControlRouter />} />
        </Routes>
    </Router>
  )
}

export default AppRouter