import React, { useEffect, useState } from 'react'
import BASE_URL from '../../../constants/constants'
import { useAppDispatch} from '../../../hooks/reduxhooks'
import { useFetch } from '../../../hooks/useFetch'
import { setData } from '../../../reducers/financialSlice'
import Filters from '../../filters/Filters'
import FinancialTable from '../../tables/FinancialTable'

const ExpenseViewPage = () => {

  const { handleFetchValues, resultFetch, resetFetchValues } = useFetch();
  const dispatch = useAppDispatch()

  const [ currentDate, setCurrentDate ] = useState<string>(`${new Date().getFullYear()}-${new Date().getMonth() +1}`) 

  useEffect(()=> {

    resetFetchValues()

    const dateSplitted = currentDate.split("-")
    const yearFilter = parseInt(dateSplitted[0])
    const monthFilter = parseInt(dateSplitted[1])

    handleFetchValues(`${BASE_URL}FinancialData/get/byMonth/expense`, 
                      'POST', 
                      {'Content-Type': 'application/json'}, 
                      JSON.stringify({month: monthFilter, year: yearFilter}));
    
  },[handleFetchValues, currentDate, resetFetchValues])

  useEffect(()=> {

    if(resultFetch === null) return;

    if(resultFetch.success){
      dispatch(setData(resultFetch.data))
    }

  }, [resultFetch, dispatch])

  return (

    <div className='view_Transactions_container'>
        <Filters currentDate={currentDate} setCurrentDate={setCurrentDate} />
        {
          resultFetch?.data 
          ?
          <FinancialTable type='expense' />
          : 
          <h1 className='m-auto'>Cargando...</h1>
        }
      </div>
    ) 
}

export default ExpenseViewPage