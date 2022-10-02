
export interface IUseFetch  {
    url: string | null,
    method: string | null,
    headers: object | null | undefined
    body: string | null | undefined
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
    conceptMessage?:string | null | false
    amountMessage?:string | null | false,       
}

export interface IFinancialData  {
    amount : number,
    concept: string,
    fulldate? : string,
    day: number,
    month: number,
    year: number,
    __v?: number,
    _id?: string
}