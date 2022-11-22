import React, {useEffect} from 'react';
import './App.css';
import {ButtonComponent} from "./components/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueTC, setValueFromLocalStorageTC} from "./bll/counter-reducer";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(setValueFromLocalStorageTC())
    }, [])

    const onclickHandlerInc = () => {
        // @ts-ignore
        dispatch(incValueTC())
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <ButtonComponent name={'inc'} callBack={onclickHandlerInc}/>
        </div>
    );
}

export default App;
