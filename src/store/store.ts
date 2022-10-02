import { configureStore  } from "@reduxjs/toolkit";
import financialSlice from "../reducers/financialSlice";
import sidebarSlice from "../reducers/sidebarSlice";

export const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        financial: financialSlice
    }
})

export type State = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch