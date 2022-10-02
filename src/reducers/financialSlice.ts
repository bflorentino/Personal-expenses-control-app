import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "../store/store";
import { IFinancialData } from "../interfaces/interfaces";

interface IfData {
    data: IFinancialData[]
}

const initialState :IfData ={
    data: []
};

export const financialSlice = createSlice({
    name: 'financial',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<IFinancialData[]>) => {
            state.data = [...action.payload]
        },
        removeData: state => {
            state.data = []
        }    
    }
})

export const {setData, removeData} = financialSlice.actions
export const  selectFinancialData = (state: State) => state.financial.data;
export default financialSlice.reducer