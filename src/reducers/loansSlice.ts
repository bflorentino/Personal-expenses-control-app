import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoans } from "../interfaces/interfaces";
import { State } from "../store/store";

const initialState :{data:ILoans[]} = {
    data:[]
}

export const loansSlice = createSlice({
    name : 'loans',
    initialState,
    reducers:{
        setLoans:(state, action:PayloadAction<ILoans[]>) => {
            state.data = [...action.payload]
        }
    }
})

export const { setLoans } = loansSlice.actions
export const selectLoans =  (state:State) => state.loans.data
export default loansSlice.reducer