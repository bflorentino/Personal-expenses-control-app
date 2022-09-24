import { useCallback, useEffect, useState } from "react";
import { IUseFetch, IServerRes } from "../interfaces/interfaces";

const initialFetchValuesState:IUseFetch  = {
    url: null,
    method: null,
    headers: undefined,
    body: undefined
}

const initialFetchResultState: IServerRes = {
    message: null,
    data: null,
    success: false
}

export const useFetch = () => {
    
    const [ fetchValues, setFetchValues ] = useState<IUseFetch>(initialFetchValuesState);
    const [resultFetch, setResultFetch ] = useState<IServerRes | null >(null)
    
    const fetchData = useCallback(async () => {

        const request = {
            method: fetchValues.method,
            headers: fetchValues.headers ? fetchValues.headers : undefined,
            body: fetchValues.body ? fetchValues.body : undefined,
        }
        
        const result =  await fetch(fetchValues.url as unknown as URL, request as unknown as RequestInit)
        return await result.json()

    },[fetchValues] )

    const resetFetchValues = useCallback(() => {
        setFetchValues(initialFetchValuesState)
        setResultFetch(initialFetchResultState)
    }, [])
    
    useEffect(()=> {

        if(fetchValues.url){
            fetchData() 
            .then(result => { 
                setResultFetch(result as IServerRes)
            })
        }
    }, [fetchValues, fetchData ])

    const handleFetchValues = useCallback((url:string, method:string, headers: undefined | object, body:undefined | string ) => {
        setFetchValues({
            url,
            method,
            headers,
            body
        })
    }, [])

    return { handleFetchValues, resultFetch, resetFetchValues }
}