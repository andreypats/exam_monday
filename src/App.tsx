import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/button/Button";
import {Counter} from "./components/counter/Counter";

function App() {

    const maxNum = 5
    const minNum = 0

    const [num, setNum] = useState<number>(minNum)

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

    const setToLocalStorage = () => {
        localStorage.setItem('localStorageNum', JSON.stringify(num))
        localStorage.setItem('localStorageNum+1', JSON.stringify(num + 1))
        console.log('setToLocalStorage')
    }

    const getFromLocalStorage = () => {
        let numAsString = localStorage.getItem('localStorageNum')
        if (numAsString) {
            let newNum = JSON.parse(numAsString)
            setNum(newNum)
        }
        console.log('getFromLocalStorage')
    }

    const clearLocalStorage = () => {
        localStorage.clear()
        console.log('clearLocalStorage')
        setNum(minNum)
    }

    const removeLocalStorage = () => {
        localStorage.removeItem('localStorageNum+1')
        console.log('removeLocalStorageNum+1')
    }

    return (
        <div className="App">
            <Counter num={num} maxNum={maxNum}/>
            <Button name={'inc'} callBack={onclickHandlerInc} disabled={disabledInc}/>
            <Button name={'reset'} callBack={onclickHandlerReset} disabled={disabledReset}/>
            <Button name={'setToLocalStorage'} callBack={setToLocalStorage}/>
            <Button name={'getFromLocalStorage'} callBack={getFromLocalStorage}/>
            <Button name={'clearLocalStorage'} callBack={clearLocalStorage}/>
            <Button name={'removeLocalStorage'} callBack={removeLocalStorage}/>
        </div>
    );
}

export default App;

//7:50