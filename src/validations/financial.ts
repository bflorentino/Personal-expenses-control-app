import { IValidationFinancialData } from "../interfaces/interfaces";

export const validateFinancialData = (e:any, errors:IValidationFinancialData) => {

    const errorsCopy = {...errors}

    switch (e.target.name) {
        
        case "concept":
            errorsCopy.conceptMessage = null;

            if(e.target.value === "")
                errorsCopy.conceptMessage = "The concept is required. Please fill the input"
            
            break;
        
        case "amount":
            errorsCopy.amountMessage = null;
            
            if(e.target.value <= 0)
                errorsCopy.amountMessage = "Please, fill the input with a valid amount"
            
            break;

        case "personName":
            errorsCopy.personNameMessage = null

            if(e.target.value === "")
                errorsCopy.personNameMessage = "Please, fill the input with the name of the person involved in the loan"
    
            break;

        case "loanId":
            errorsCopy.loanIdMessage = null

            if(e.target.value === "")
                errorsCopy.loanIdMessage = "Please, select the load involved in this transaction"

            break

        case "transactionType":
            errorsCopy.transactionTypeMessage = null

            if(e.target.value === "")
                errorsCopy.transactionTypeMessage = "Please, select the kind of transaction"
            
            break

        default:
            break;
    }
    
    return errorsCopy
}