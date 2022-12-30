import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "../store/store";
import { Transactions } from "../interfaces/interfaces";

const initialState:{data:Transactions} = {
    data: {transactions:[], totalAmount:0}
};

export const financialSlice = createSlice({
    name: 'financial',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Transactions>) => {
            state.data = {...action.payload}
        },
        removeData: state => {
            state.data = {...initialState.data}
        }    
    }
})

export const {setData, removeData} = financialSlice.actions
export const  selectFinancialData = (state: State) => state.financial.data;
export default financialSlice.reducer