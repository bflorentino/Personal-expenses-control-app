import { useState } from "react"

export const useForm = (initialState:any) => {

    const [formValues, setFormValues] = useState<any>(initialState)
    
    const handleInputChanges = ({ target }: any) =>{
        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        })
    }
    
    const reset = () => {
        setFormValues(initialState)
    }
    
    return [formValues, handleInputChanges, reset]
}