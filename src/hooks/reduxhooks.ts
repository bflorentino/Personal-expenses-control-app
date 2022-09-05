import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { State, Dispatch} from '../store/store'

export const useAppDispatch:() => Dispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<State> = useSelector