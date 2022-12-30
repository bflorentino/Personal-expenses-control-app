import React from 'react'
import { useAppSelector } from '../../hooks/reduxhooks'

const FinancialTable = ({type}:{type:string}) => {
  
  const financial = useAppSelector(state => state.financial.data)

  return (
    <div className='table_container'>
      {
        financial.transactions.length > 0 
          ?
            (
            <>
              <h3 className='mt-3'>Total {type}s for this month: ${financial.totalAmount}</h3>

              <table>
              <thead className={type === 'expense' ? 'table_greenThead': 'table_blueThead'}>
                <tr>
                  <th className='text-left'>Concept</th>
                  <th className='text-left'>Transaction Type</th>
                  <th className='text-left'>Amount</th>
                  <th className='text-left'>Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  financial.transactions.map(row => (
                    <tr key={row._id} className='table_tr'>
                      <td>{row.concept}</td>
                      <td>{row.transactionType}</td>
                      <td>${row.amount}</td>
                      
                      <td>{new Date(row.fulldate).toLocaleDateString('en-GB', { timeZone: 'UTC' })
                                                 .split('-')
                                                 .reverse()
                                                 .join('-')}
                      </td>
                    
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </>
          )
          :
          <p className='mt-3'>You don't have any {type} for this month </p>
      }
    </div>
  )
}

export default FinancialTable