import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { useForm } from '../../hooks/useForm'
import {  validateFinancialData } from '../../validations/financial'
import { IValidationFinancialData } from '../../interfaces/interfaces'
import { useFetch } from '../../hooks/useFetch'
import Swal from 'sweetalert2'
import BASE_URL from '../../constants/constants'

const FinancialRegistrationForm = ({financialType}: {financialType: 'expense' | 'income'}) => {
  
  const now = new Date();

  const history = useNavigate();

  const [ formValues, handleOnChanges ] = useForm({
    concept : "",
    amount: "",
    date: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
  })

  const { handleFetchValues, resultFetch }  = useFetch();
  
  const [ errors, setErrors ] = useState<IValidationFinancialData>({})
  
  const [ inputType, setInputType ] = useState({
    date: "text",
    amount: "text"
  })

  const [ disabled, setDisabled ] = useState<boolean>(true);
 
  useEffect(()=> {

    if(errors.amountMessage === null && errors.conceptMessage === null){
      setDisabled(false);
      return;
    }
    setDisabled(true);
  }, [errors])

  useEffect(() => {
    
    if(resultFetch === null){
      return;
    }

    if(resultFetch.success === true){
      Swal.fire("Success", `${financialType.toUpperCase()} was added successfully`, "success");
      history(`/ExpensesControl/${financialType}View`);
    }

  }, [resultFetch, financialType, history ])

  const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const URL = `${BASE_URL}FinancialData/add/${financialType}`

    const dateValues = formValues.date.split("/");
    const date = new Date(`${dateValues[2]}-${dateValues[1]}-${dateValues[0]}`);
    formValues.year = date.getFullYear();
    formValues.month = date.getMonth() + 1;
    formValues.day = date.getDay();

    handleFetchValues(URL, 'POST', {'Content-Type': 'application/json'}, JSON.stringify(formValues))
  }

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setErrors({...validateFinancialData(e)})
  }

  return (
    <form>
      <h1>New {financialType}</h1>
      <div className='FinancialForm__div'>
        <input 
          type="text" 
          name= "concept"
          placeholder='Concept'
          autoComplete='off'
          className= {`mt-3 FinancialForm__inp px-1 ${errors.conceptMessage && 'inpError'}`}
          value = {formValues.concept}
          onChange={handleOnChanges}
          onBlur={handleOnBlur}
        />
        {
          errors.conceptMessage  && <p className='text-red text-left'>{errors.conceptMessage}</p>
        }
      </div>

      <div className='FinancialForm__div'>
      <input 
          type="number" 
          name="amount"  
          placeholder='Amount'
          autoComplete='off'
          className= {`mt-3 FinancialForm__inp px-1 ${errors.amountMessage && 'inpError'}`}
          value = {formValues.amount}
          onChange={handleOnChanges}
          onBlur={handleOnBlur}
      />
        {
          errors.amountMessage && <p className='text-red text-left'>{errors.amountMessage}</p>
        }
      </div>

      <div className='FinancialForm__div'>
        <input 
          type={inputType.date} 
          name='date' 
          value = {formValues.date}
          onChange={handleOnChanges}
          autoComplete="off"
          className= "mt-3 FinancialForm__inp px-1"
          id="date"
          onFocus={()=> setInputType({...inputType, date: "date"})}
          onBlur={()=> setInputType({...inputType, date: "text"})}
        />
      </div>

      <button type='submit' className='btn mt-2 primary pointer' disabled={disabled} onClick={handleOnSubmit}>
        Registrar Gasto
      </button>
    </form>
  )
}

export default FinancialRegistrationForm