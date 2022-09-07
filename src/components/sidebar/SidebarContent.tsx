import React from 'react'
import { Link } from 'react-router-dom'
import { useDropDown } from '../../hooks/useDropDown'

const SidebarContent = () => {

    const ul1 = useDropDown()
    const ul2 = useDropDown()
    
  return (
    <ul className='sidebar__list mt-3 ml-1'>

            <li className='sidebar__listItem mr-1'>
                <div 
                    className='sidebar__listItemTitle p-1 pointer' 
                    onClick={() => ul1.handleDropDown("ul-expenses")}
                >
                    <p className='text-black text-500 ml-1'>Expenses </p>
                    <img 
                        src={ ul1.isArrowOpen 
                                ?  '../../assets/images/down.png'
                                :  '../../assets/images/next.png'
                            }               
                        alt=""  
                    />
                </div>
                <ul className='none ml-1 text-gray text-400 ml-3 w-full' id='ul-expenses'>
                    <li className='w-full p-1'>
                        <Link 
                            to='/ExpensesControl/expenseAdd' 
                            className='sidebar__linkItem text-gray text-400 p-1' 
                        >
                            Add New Expense
                        </Link>
                    </li>
                    <li className='p-1'>
                        <Link 
                            to='/ExpensesControl/expenseView' 
                            className='sidebar__linkItem text-gray text-400 p-1'
                        >
                        View Expenses
                        </Link>
                    </li>
                </ul>
            </li>

            <li className='sidebar__listItem mr-1 mt-2'>
                <div 
                    className='sidebar__listItemTitle p-1 pointer' 
                    onClick={()=> ul2.handleDropDown("ul-incomes")}
                >
                    <p className='text-black text-500 ml-1'>Incomes </p>
                    <img src={ ul2.isArrowOpen 
                                ?  '../../assets/images/down.png'
                                :  '../../assets/images/next.png'
                            }   
                        alt=""  />
                </div>
                <ul className='none ml-3' id='ul-incomes'>
                    <li className='p-1'>
                        <Link 
                            to='/ExpensesControl/incomeAdd' 
                            className='sidebar__linkItem text-gray text-400 mt-1 p-1' 
                        >
                            Add New Income
                        </Link>
                    </li>
                    <li className='p-1'>
                        <Link 
                            to='/ExpensesControl/incomeView' 
                            className='sidebar__linkItem text-gray text-400 mt-1 p-1'
                        >
                            View Incomes
                        </Link>
                    </li>
                </ul>
            </li>

            <li className='sidebar__listItem mt-2 mr-1'>
                <Link to='' className='sidebar__listItemTitle text-black text-500 p-1'>
                    <p className='ml-1'>Compare</p> 
                    <img src="../../assets/images/next.png" alt="" />
                </Link>
            </li>
        </ul>
  )
}

export default SidebarContent