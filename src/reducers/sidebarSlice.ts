import { createSlice } from "@reduxjs/toolkit";
import type { State } from "../store/store";

interface SidebarModalState {
    open: boolean
}

const initialState: SidebarModalState = {
    open: false
} 

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers : {
        opened: state => {
            state.open = true
        },
        closed: state => {
            state.open= false
        }
    }
})

export const {opened, closed} = sidebarSlice.actions
export const selectOpenState = (state: State) => state.sidebar.open
export default sidebarSlice.reducer