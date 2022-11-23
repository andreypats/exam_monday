import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {
    incValueAC,
    InitialStateType,
    resetValueAC,
    setMaxValueAC,
    setMinValueAC,
    setMinValueFromLSAC
} from "./bll/counter-reducer";
import {ButtonComponent} from "./components/button/Button";
import {Counter} from "./components/counter/Counter";
import {SetterMinMax} from "./components/setMinMax/SetMinMax";

function App() {

    const counterState = useSelector<AppStateType, InitialStateType>(state => state.counter)
    const dispatch = useDispatch()

    const [errorMin, setErrorMin] = useState<boolean>(false)
    const [errorMax, setErrorMax] = useState<boolean>(false)
    const [disabledSet, setDisabledSet] = useState<boolean>(true)

    let disabledInc: boolean
    let disabledReset: boolean

    counterState.num >= counterState.max ? disabledInc = true : disabledInc = false
    counterState.num > counterState.min ? disabledReset = false : disabledReset = true

    const onclickHandlerInc = () => {
        dispatch(incValueAC())
        console.log('onclickHandlerInc')
    }
    const onclickHandlerReset = () => {
        dispatch(resetValueAC())
        console.log('onclickHandlerReset')
    }

    const onchangeMinInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(Number(event.currentTarget.value)))
        setDisabledSet(false)
        setErrorMin(false)
        if (Number(event.currentTarget.value) < 0 || Number(event.currentTarget.value) >= counterState.max) {
            setErrorMin(true)
            setDisabledSet(true)
        }
    }
    const onchangeMaxInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(Number(event.currentTarget.value)))
        setErrorMax(false)
        setDisabledSet(false)
        if (Number(event.currentTarget.value) <= counterState.min) {
            setErrorMax(true)
            setDisabledSet(true)
        }
    }

    const onclickHandlerSet = () => {
        dispatch(setMinValueFromLSAC())
        setDisabledSet(true)
    }

    return (
        <div className="App">
            <div className="SetterMinMax">
                <h3 style={{color: "whitesmoke"}}>Input values:</h3>
                <div className="Input">
                    <SetterMinMax name={'start value'} minNum={counterState.min} callBack={onchangeMinInputHandler}
                                  error={errorMin}/>
                    <SetterMinMax name={'max value'} maxNum={counterState.max} callBack={onchangeMaxInputHandler}
                                  error={errorMax}/>
                </div>
                <ButtonComponent name={'set'} callBack={onclickHandlerSet} disabled={disabledSet}/>
            </div>
            <div className="Counter">
                <Counter num={counterState.num} max={counterState.max}/>
                <ButtonComponent name={'inc'} callBack={onclickHandlerInc} disabled={disabledInc}/>
                <ButtonComponent name={'reset'} callBack={onclickHandlerReset} disabled={disabledReset}/>
            </div>
        </div>
    );
}

export default App;
