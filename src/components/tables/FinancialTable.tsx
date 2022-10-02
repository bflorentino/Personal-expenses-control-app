import React from 'react'
import { useAppSelector } from '../../hooks/reduxhooks'

const FinancialTable = ({type}:{type:string}) => {
  
  const financial = useAppSelector(state => state.financial.data)  

  return (
    <div className='table_container'>
      <table>
              <thead className={type === 'expense' ? 'table_greenThead': 'table_blueThead'}>
                <tr>
                  <th className='text-left'>Concept</th>
                  <th className='text-left'>Amount</th>
                  <th className='text-left'>Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  financial.map(row => (
                    <tr key={row._id} className='table_tr'>
                      <td>{row.concept}</td>
                      <td>{row.amount}</td>
                      <td>{row.fulldate}</td>
                    </tr>
                  ))
                }
              </tbody>
      </table>
    </div>
  )
}

export default FinancialTable