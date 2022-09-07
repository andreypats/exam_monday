import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {ButtonComponent} from "./components/button/Button";
import {Counter} from "./components/counter/Counter";
import {SetterMinMax} from "./components/setMinMax/SetMinMax";

function App() {

    let min = 0
    let max = 5

    let minNumAsString = localStorage.getItem('localStorageMinNum')
    if (minNumAsString) {
        min = JSON.parse(minNumAsString)
    }

    let maxNumAsString = localStorage.getItem('localStorageMaxNum')
    if (maxNumAsString) {
        max = JSON.parse(maxNumAsString)
    }

    const [num, setNum] = useState<number>(min)
    const [minNum, setMinNum] = useState<number>(min)
    const [maxNum, setMaxNum] = useState<number>(max)
    const [errorMin, setErrorMin] = useState<boolean>(false)
    const [errorMax, setErrorMax] = useState<boolean>(false)
    const [disabledSet, setDisabledSet] = useState<boolean>(false)
    const [inputValuesWindow, setInputValuesWindow] = useState<boolean>(false)


    useEffect(() => {
        let numAsString = localStorage.getItem('localStorageNum')
        if (numAsString) {
            let newNum = JSON.parse(numAsString)
            setNum(newNum)
            console.log('useEffectGetItem')
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('localStorageNum', JSON.stringify(num))
    }, [num])
    // useEffect выполняет колбэк функцию effect каждый раз, когда изменяется значение num, записанное во второй параметр deps

    let disabledInc: boolean
    let disabledReset: boolean

    num === max ? disabledInc = true : disabledInc = false
    num > min ? disabledReset = false : disabledReset = true

    const onclickHandlerInc = () => {
        setNum(num + 1)
        console.log('onclickHandlerInc')
    }
    const onclickHandlerReset = () => {
        setNum(min)
        console.log('onclickHandlerReset')
    }
    const onclickHandlerSet = () => {
        localStorage.setItem('localStorageMinNum', JSON.stringify(minNum))
        localStorage.setItem('localStorageMaxNum', JSON.stringify(maxNum))
        setNum(minNum)
        setInputValuesWindow(false)
    }
    const onclickHandlerChangeWindow = () => {
        setInputValuesWindow(true)
    }

    const onchangeMinInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMinNum(Number(event.currentTarget.value))
        setDisabledSet(false)
        setErrorMin(false)
        if (Number(event.currentTarget.value) < 0 || Number(event.currentTarget.value) >= maxNum) {
            setErrorMin(true)
            setDisabledSet(true)
        }
    }
    const onchangeMaxInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxNum(Number(event.currentTarget.value))
        setErrorMax(false)
        setDisabledSet(false)
        if (Number(event.currentTarget.value) <= minNum) {
            setErrorMax(true)
            setDisabledSet(true)
        }
    }

    // const setToLocalStorage = () => {
    //     localStorage.setItem('localStorageNum', JSON.stringify(num))
    //     localStorage.setItem('localStorageNum+1', JSON.stringify(num + 1))
    //     console.log('setToLocalStorage')
    // }
    //
    // const getFromLocalStorage = () => {
    //     let numAsString = localStorage.getItem('localStorageNum')
    //     if (numAsString) {
    //         let newNum = JSON.parse(numAsString)
    //         setNum(newNum)
    //     }
    //     console.log('getFromLocalStorage')
    // }
    //
    // const clearLocalStorage = () => {
    //     localStorage.clear()
    //     console.log('clearLocalStorage')
    //     setNum(minNum)
    // }
    //
    // const removeLocalStorage = () => {
    //     localStorage.removeItem('localStorageNum+1')
    //     console.log('removeLocalStorageNum+1')
    // }

    const counterWindows = () => {
        if (inputValuesWindow) {
            return (
                <div className="SetterMinMax">
                    <h3 style={{color: "whitesmoke"}}>Input values:</h3>
                    <div className="Input">
                        <SetterMinMax name={'start value'} minNum={minNum} callBack={onchangeMinInputHandler}
                                      error={errorMin}/>
                        <SetterMinMax name={'max value'} maxNum={maxNum} callBack={onchangeMaxInputHandler}
                                      error={errorMax}/>
                    </div>
                    <ButtonComponent name={'set'} callBack={onclickHandlerSet} disabled={disabledSet}/>
                </div>
            )
        } else {
            return (
                <div className="Counter">
                    <Counter num={num} max={max}/>
                    <ButtonComponent name={'inc'} callBack={onclickHandlerInc} disabled={disabledInc}/>
                    <ButtonComponent name={'reset'} callBack={onclickHandlerReset} disabled={disabledReset}/>
                    <ButtonComponent name={'set'} callBack={onclickHandlerChangeWindow}/>
                </div>
            )
        }
    }

    return (
        <div className="App">
            {counterWindows()}
        </div>

        // <div className="App">
        //     <div>
        //         <SetterMinMax name={'SetMinNum'} minNum={minNum} callBack={onchangeMinInputHandler}/>
        //         <SetterMinMax name={'SetMaxNum'} maxNum={maxNum} callBack={onchangeMaxInputHandler}/>
        //         <ButtonComponent name={'set'} callBack={onclickHandlerSet}/>
        //     </div>
        //     <div>
        //         <Counter num={num} max={max}/>
        //         <ButtonComponent name={'inc'} callBack={onclickHandlerInc} disabled={disabledInc}/>
        //         <ButtonComponent name={'reset'} callBack={onclickHandlerReset} disabled={disabledReset}/>
        //     </div>
        //
        //     {/*<Button name={'setToLocalStorage'} callBack={setToLocalStorage}/>*/}
        //     {/*<Button name={'getFromLocalStorage'} callBack={getFromLocalStorage}/>*/}
        //     {/*<Button name={'clearLocalStorage'} callBack={clearLocalStorage}/>*/}
        //     {/*<Button name={'removeLocalStorage'} callBack={removeLocalStorage}/>*/}
        // </div>
    );
}

export default App;
