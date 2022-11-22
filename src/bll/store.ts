import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { counterReducer } from "./counter-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})

// чтобы использовать thunk добавляем в store applyMiddleware(thunk)
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))


export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store