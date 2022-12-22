import React from 'react'
import { IFilters } from '../../interfaces/interfaces'

const Filters = ({currentDate, setCurrentDate} : IFilters) => {

  return (
    <div className='view_Transactions_filter mt-3'>
        <h2 className='ml-3'>Mes Filtrado</h2>
        <input 
            type="month" 
            className='ml-2'
            value={currentDate}
            onChange={(e)=>setCurrentDate(e.target.value)} 
        />
    </div>
  )
}

export default Filters