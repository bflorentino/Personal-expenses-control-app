import { configureStore  } from "@reduxjs/toolkit";
import sidebarSlice from "../reducers/sidebarSlice";

export const store = configureStore({
    reducer: {
        sidebar: sidebarSlice
    }
})

export type State = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch