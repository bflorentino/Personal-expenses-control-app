import React from 'react'
import { Link } from 'react-router-dom'

const SidebarContent = () => {
  return (
    <ul className='sidebar__list mt-3 ml-2'>
            <li className='sidebar__listItem mr-1'>
                <Link to='/ExpensesControl/expenseView' className='sidebar__linkItem text-black text-500'>Expenses
                    <img src="../../assets/images/next.png" alt=""  />
                </Link>
            </li>
            <li className='sidebar__listItem mt-1 mr-1'> 
                <Link to='/ExpensesControl/incomeView' className='sidebar__linkItem text-black text-500' >Incomes 
                    <img src="../../assets/images/next.png" alt="" />
                </Link>
            </li>
            <li className='sidebar__listItem mt-1 mr-1'>
                <Link to='' className='sidebar__linkItem text-black text-500'>Compare 
                    <img src="../../assets/images/next.png" alt="" />
                </Link>
            </li>
        </ul>
  )
}

export default SidebarContent