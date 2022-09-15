import { IValidationFinancialData } from "../interfaces/interfaces";

const errors:IValidationFinancialData = {
    conceptMessage: null,
    amountMessage: null
}

export const validateFinancialData = (e:any) => {
    
    if(e.target.name === "concept" ){

        if(e.target.value === ""){
            errors.conceptMessage = "The concept is required. Please fill the input"
        }else{
            errors.conceptMessage = null;
        }
    }

    if(e.target.name === "amount"){

        if(e.target.value <= 0){
            errors.amountMessage = "Please, fill the input with a valid amount"
        }else{
            errors.amountMessage = null;
        }
    }

    return errors
}