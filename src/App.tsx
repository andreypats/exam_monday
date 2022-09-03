import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/button/Button";
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

    let disabledInc
    let disabledReset
    //let disabledSet = true

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
        console.log('onclickHandlerSet')
    }

    const onchangeMinInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMinNum(Number(event.currentTarget.value))
        console.log('onchangeMinInputHandler')
    }

    const onchangeMaxInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxNum(Number(event.currentTarget.value))
        console.log('onchangeMaxInputHandler')
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

    return (
        <div className="App">
            <div>
                <SetterMinMax name={'SetMinNum'} minNum={minNum} callBack={onchangeMinInputHandler}/>
                <SetterMinMax name={'SetMaxNum'} maxNum={maxNum} callBack={onchangeMaxInputHandler}/>
                <Button name={'set'} callBack={onclickHandlerSet}/>
            </div>
            <div>
                <Counter num={num} max={max}/>
                <Button name={'inc'} callBack={onclickHandlerInc} disabled={disabledInc}/>
                <Button name={'reset'} callBack={onclickHandlerReset} disabled={disabledReset}/>
            </div>

            {/*<Button name={'setToLocalStorage'} callBack={setToLocalStorage}/>*/}
            {/*<Button name={'getFromLocalStorage'} callBack={getFromLocalStorage}/>*/}
            {/*<Button name={'clearLocalStorage'} callBack={clearLocalStorage}/>*/}
            {/*<Button name={'removeLocalStorage'} callBack={removeLocalStorage}/>*/}
        </div>
    );
}

export default App;
