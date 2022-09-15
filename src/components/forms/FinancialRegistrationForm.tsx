import React, {useState} from 'react'
import { useForm } from '../../hooks/useForm'
import {  validateFinancialData } from '../../validations/financial'
import { IValidationFinancialData } from '../../interfaces/interfaces'

const FinancialRegistrationForm = () => {
  
  const [ formValues, handleOnChanges ] = useForm({
    concept : "",
    amount: "",
    date: new Date().toLocaleDateString()
  })

  const [ errors, setErrors ] = useState<IValidationFinancialData>({})

  const [ inputType, setInputType ] = useState({
    date: "text",
    amount: "text"
  })

  const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setErrors({...validateFinancialData(e)})
  }

  return (
    <form>
      <input 
        type="text" 
        name= "concept"
        placeholder='Concept'
        autoComplete='off'
        className= {`mt-3 FinancialForm__inp ${errors.conceptMessage && 'inpError'}`}
        value = {formValues.concept}
        onChange={handleOnChanges}
        onBlur={handleOnBlur}
      />
      {
        errors.conceptMessage  && <p className='text-red'>{errors.conceptMessage}</p>
      }
      <input 
          type="number" 
          name="amount"  
          placeholder='Amount'
          autoComplete='off'
          className= {`mt-3 FinancialForm__inp ${errors.amountMessage && 'inpError'}`}
          value = {formValues.amount}
          onChange={handleOnChanges}
          onBlur={handleOnBlur}
      />
      {
        errors.amountMessage && <p className='text-red'>{errors.amountMessage}</p>
      }

      <input 
        type={inputType.date} 
        name='date' 
        value = {formValues.date}
        onChange={handleOnChanges}
        autoComplete="off"
        className= "mt-3 FinancialForm__inp"
        id="date"
        onFocus={()=> setInputType({...inputType, date: "date"})}
        onBlur={()=> setInputType({...inputType, date: "text"})}
      />
      <button type='submit' onClick={handleOnSubmit}>
        Registrar Gasto
      </button>
    </form>
  )
}

export default FinancialRegistrationForm