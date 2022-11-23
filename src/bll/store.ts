import {combineReducers, legacy_createStore} from "redux";
import { counterReducer } from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer, loadState())

// колбэк (listener), который следит за изменениями store
store.subscribe(()=>{
    //при измении store данный код будет срабатывать (значение app-state будет записываться в localStorage)
    saveState({
        counter: store.getState().counter
    })
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store