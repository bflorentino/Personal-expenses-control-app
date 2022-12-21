import React, {useEffect, useState, useRef} from 'react'

import { useNavigate } from 'react-router-dom'

import { useForm } from '../../hooks/useForm'
import { useFetch } from '../../hooks/useFetch'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxhooks'
import { setLoans } from '../../reducers/loansSlice'

import { IValidationFinancialData } from '../../interfaces/interfaces'
import {  validateFinancialData } from '../../validations/financial'
import BASE_URL, {expenseTypes, incomeTypes} from '../../constants/constants'
import Swal from 'sweetalert2'

const errorsTemplate:IValidationFinancialData = {
    conceptMessage: false,
    amountMessage: false,
    transactionTypeMessage : false,
    personNameMessage: null,
    loanIdMessage: null,
}

const FinancialRegistrationForm = ({financialType}: {financialType: 'expense' | 'income'}) => {
  
  const now = new Date();
  const history = useNavigate();

  const [ formValues, handleOnChanges ] = useForm({
    concept : "",
    amount: "",
    date: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`,
    personName : "",
    transactionType:"",
    loanId:""
  })

  const { handleFetchValues, resultFetch }  = useFetch();
  const dispatch = useAppDispatch()
  const loansSelector = useAppSelector(state => state.loans.data)
  const isStarted = useRef(false)
  const [ errors, setErrors ] = useState<IValidationFinancialData>({...errorsTemplate})
  const [ disabled, setDisabled ] = useState<boolean>(true);
  
  const [ inputType, setInputType ] = useState({
    date: "text",
    amount: "text",
  })
 
  useEffect(()=> {

    const errorFound = Object.values(errors).find(err => err !== null)

    if(!errorFound){
      setDisabled(false);
      return;
    }

    setDisabled(true);
  }, [errors])

  useEffect(()=>{
    if(!isStarted.current){
      handleFetchValues(`${BASE_URL}loans`, 'GET', undefined, undefined )
    }
  },[handleFetchValues])

  useEffect(() => {
    
    if(resultFetch === null){
      return;
    }

    // First, get active loans
    if(!isStarted.current)
    {
      if(resultFetch.success){
        dispatch(setLoans(resultFetch.data))
        isStarted.current = true
      }
      return
    }

    // Save data
    if(resultFetch.success){
        Swal.fire("Success", resultFetch.message as string, "success");
        history(`/ExpensesControl/${financialType}View`);
        return
      }

      Swal.fire("Error Saving", resultFetch.message as string, "error");

  }, [resultFetch, financialType, history,  dispatch ])

  const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    
    e.preventDefault()

    const URL = `${BASE_URL}FinancialData/add/${financialType}`
    const dataToAdd = {...formValues}

    const dateValues = dataToAdd.date.split("/");
    const date = new Date(`${dateValues[2]}-${dateValues[1]}-${dateValues[0]}`);
    dataToAdd.year = date.getFullYear();
    dataToAdd.month = date.getMonth() + 1;
    dataToAdd.day = date.getDay();

    financialType === "expense" 
      ? dataToAdd.expenseType = parseInt(dataToAdd.transactionType) 
      : dataToAdd.incomeType =  parseInt(dataToAdd.transactionType)

    // Delete transactionType prop
    delete dataToAdd["transactionType"]

    handleFetchValues(URL, 'POST', {'Content-Type': 'application/json'}, JSON.stringify(dataToAdd))
  }

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLSelectElement>) => {
    setErrors({...validateFinancialData(e, errors)})
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

          <select 
            name= "transactionType" 
            value={formValues.transactionType }
            className= {`mt-3 FinancialForm__inp px-1 ${errors.transactionTypeMessage  && 'inpError'}`}
            onChange={handleOnChanges}
            onBlur={handleOnBlur}
          >
            <option value="" selected>Pick the type of {financialType} </option>
            {
              financialType === "expense" 
                ?
                expenseTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.type}</option>
                ))
                :
                incomeTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.type}</option>
                ))
            }
          </select>

          {
            errors.transactionTypeMessage && <p className='text-red text-left'>{errors.transactionTypeMessage}</p>
          }
         </div>

        <div className='FinancialForm__div'>

          <select 
            name= "loanId" 
            value={formValues.loanId }
            disabled={parseInt(formValues.transactionType) !== 3}
            className= {`mt-3 FinancialForm__inp px-1 ${errors.loanIdMessage  && 'inpError'}`}
            onChange={handleOnChanges}
            onBlur={handleOnBlur}
          >
            <option value="" selected>Pick the corresponding Loan </option>
            {
              financialType === "expense" 
                ?
                loansSelector.map(loan => (
                 !loan.isLender && <option key={loan._id} value={loan._id}>{`${loan.personName} -- Balance Restante a pagar => ${loan.balance}`}</option>
                ))
                :
                loansSelector.map(loan => (
                  loan.isLender &&  <option key={loan._id} value={loan._id}>{`${loan.personName} -- Balance Restante a recibir => ${loan.balance}`}</option>
                ))
            }
          </select>

          {
            errors.loanIdMessage && <p className='text-red text-left'>{errors.loanIdMessage}</p>
          }
         </div>
         
         <div className='FinancialForm__div'>
            <input 
                type="text" 
                name="personName"  
                placeholder="Person's Name"
                autoComplete='off'
                disabled={parseInt(formValues.transactionType) !== 2}
                className= {`mt-3 FinancialForm__inp px-1 ${errors.personNameMessage && 'inpError'}`}
                value = {formValues.personName}
                onChange={handleOnChanges}
                onBlur={handleOnBlur}
            />
        {
          errors.personNameMessage && <p className='text-red text-left'>{errors.personNameMessage}</p>
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