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
        console.log('onclickHandler1')
    }

    const onclickHandlerReset = () => {
        setNum(minNum)
        console.log('onclickHandler2')
    }

    const setToLocalStorage = () => {
        localStorage.setItem('counterNum', num.toString())
        console.log('setToLocalStorage')
    }

    const getFromLocalStorage = () => {
        //code
        console.log('getFromLocalStorage')
    }

    return (
        <div className="App">
            <Counter num={num} maxNum={maxNum}/>
            <Button name={'inc'} callBack={onclickHandlerInc} disabled={disabledInc}/>
            <Button name={'reset'} callBack={onclickHandlerReset} disabled={disabledReset}/>
            <Button name={'setToLocalStorage'} callBack={setToLocalStorage}/>
            <Button name={'getFromLocalStorage'} callBack={getFromLocalStorage}/>
        </div>
    );
}

export default App;

//7:50