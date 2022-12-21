import React, { useEffect } from 'react'
import BASE_URL from '../../../constants/constants'
import { useAppDispatch} from '../../../hooks/reduxhooks'
import { useFetch } from '../../../hooks/useFetch'
import { setData } from '../../../reducers/financialSlice'
import FinancialTable from '../../tables/FinancialTable'

const ExpenseViewPage = () => {

  const { handleFetchValues, resultFetch } = useFetch();
  const dispatch = useAppDispatch()

  useEffect(()=> {

    handleFetchValues(`${BASE_URL}FinancialData/get/byMonth/expense`, 
                      'POST', 
                      {'Content-Type': 'application/json'}, 
                      JSON.stringify({month: new Date().getMonth(), year: new Date().getFullYear()}));
    
  },[handleFetchValues])

  useEffect(()=> {

    if(resultFetch === null) return;

    if(resultFetch.success){
      console.log(resultFetch.data)
      dispatch(setData(resultFetch.data))
    }

  }, [resultFetch, dispatch])

  return (

    resultFetch?.data ? 
      <FinancialTable type='expense' />
      : <h1>Cargando...</h1>
  )
}

export default ExpenseViewPage