
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

export interface IFilters {
    setCurrentDate: (currentDate: string) => void,
    currentDate?: string
}

export interface IValidationFinancialData {
    conceptMessage?:string | null | false
    amountMessage?:string | null | false,
    personNameMessage?:string | null,
    loanIdMessage?:string | null,
    transactionTypeMessage ?: string | null | false
}

export interface IFinancialData  {
    amount : number,
    concept: string,
    fulldate: Date,
    expenseType: number,
    incomeType: number,
    day: number,
    month: number,
    year: number,
    transactionType:string,
    __v?: number,
    _id?: string
}

export interface ILoans  {
    amount : number,
    balance: number,
    personName: string,
    fulldate? : string,
    isLender: boolean,
    day: number,
    month: number,
    year: number,
    __v?: number,
    _id?: string
}

export type Transactions = {
    totalAmount: number,
    transactions: IFinancialData[]
}