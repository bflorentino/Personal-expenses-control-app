import React, { useEffect } from 'react'

import { useAppDispatch } from '../../../hooks/reduxhooks';

import { setData } from '../../../reducers/financialSlice';
import BASE_URL from '../../../constants/constants';
import { useFetch } from '../../../hooks/useFetch';
import FinancialTable from '../../tables/FinancialTable';

const IncomeViewPage = () => {

  const { handleFetchValues, resultFetch } = useFetch();
  const dispatch = useAppDispatch()

  useEffect(()=> {

    handleFetchValues(`${BASE_URL}FinancialData/get/byMonth/income`, 
                      'POST', 
                      {'Content-Type': 'application/json'}, 
                       JSON.stringify({month: 8, year: 2022}));
    
  },[handleFetchValues])

  useEffect(()=> {

    if(resultFetch === null) return;

    if(resultFetch.success){
      dispatch(setData(resultFetch.data))
    }

  }, [resultFetch, dispatch])

  return (

    resultFetch?.data ? 
      <FinancialTable type='income' />
      : <h1>Cargando...</h1>
  )
}

export default IncomeViewPage