import { combineReducers, createStore } from "redux"
import { dataReducer } from "./reducer/DataReducer"

export const store = createStore(combineReducers({ data: dataReducer }))
