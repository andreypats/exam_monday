import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/button/Button";
import {Counter} from "./components/counter/Counter";
import {SetterMinMax} from "./components/setMinMax/SetMinMax";



function App() {

    const [minNum, setMinNum] = useState<number>(0)
    const [maxNum, setMaxNum] = useState<number>(5)
    const [num, setNum] = useState<number>(minNum)


    useEffect(() => {
        let numAsString = localStorage.getItem('localStorageNum')
        if (numAsString) {
            let newNum = JSON.parse(numAsString)
            setNum(newNum)
            console.log('useEffectGetItem')
        }
    },[])

    useEffect(() => {
        localStorage.setItem('localStorageNum', JSON.stringify(num))
    }, [num])
    // useEffect выполняет колбэк функцию effect каждый раз, когда изменяется значение num, запписанное во второй параметр deps

    let disabledInc
    let disabledReset

    num === maxNum ? disabledInc = true : disabledInc = false
    num > minNum ? disabledReset = false : disabledReset = true

    const onclickHandlerInc = () => {
        if (num < maxNum) {
            setNum(num + 1)
        }
        console.log('onclickHandlerInc')
    }

    const onclickHandlerReset = () => {
        setNum(minNum)
        console.log('onclickHandlerReset')
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
                <Button name={'set'} callBack={onclickHandlerInc}/>
            </div>
            <div>
                <Counter num={num} maxNum={maxNum}/>
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
