
export interface IUseFetch  {
    url: string | null,
    method: string | null,
    headers: object | null | undefined
    body: object | null | undefined
}

export interface IServerRes {
    message: string | null,
    data: any,
    success : boolean,
    statusType? : number
}

export interface IMenuProps {
    setIsMenuOpen: (menuOpen: boolean) => void,
    isMenuOpen?: boolean
}

export interface IValidationFinancialData {
    conceptMessage?:string | null 
    amountMessage?:string | null,       
}