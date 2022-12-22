import React, { useEffect,useState } from 'react'

import { useAppDispatch } from '../../../hooks/reduxhooks';

import { setData } from '../../../reducers/financialSlice';
import BASE_URL from '../../../constants/constants';
import { useFetch } from '../../../hooks/useFetch';
import FinancialTable from '../../tables/FinancialTable';
import Filters from '../../filters/Filters';

const IncomeViewPage = () => {
  
  const [ currentDate, setCurrentDate ] = useState<string>(`${new Date().getFullYear()}-${new Date().getMonth() +1}`) 

  const { handleFetchValues, resultFetch, resetFetchValues } = useFetch();
  const dispatch = useAppDispatch()

  useEffect(()=> {

    resetFetchValues()

    const dateSplitted = currentDate.split("-")
    const yearFilter = parseInt(dateSplitted[0])
    const monthFilter = parseInt(dateSplitted[1])

    handleFetchValues(`${BASE_URL}FinancialData/get/byMonth/income`, 
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
    resultFetch?.data ?
    (
      <div className='view_Transactions_container'>
        <Filters currentDate={currentDate} setCurrentDate={setCurrentDate} />
        <FinancialTable type='income' />
      </div>
    ) 
      : <h1 className='m-auto'>Cargando...</h1>
  )
}

export default IncomeViewPage