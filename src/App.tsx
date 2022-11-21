import React from 'react';
import './App.css';
import {ButtonComponent} from "./components/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC} from "./bll/counter-reducer";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    const onclickHandlerInc = () => {
        dispatch(incValueAC())
        console.log('onclickHandlerInc')
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <ButtonComponent name={'inc'} callBack={onclickHandlerInc}/>
        </div>
    );
}

export default App;
