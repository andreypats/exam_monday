import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/button/Button";
import {Counter} from "./components/counter/Counter";

function App() {

    const maxNum = 5
    const minNum = 0

    const [num, setNum] = useState(minNum)

    let disabledInc
    let disabledReset

    num === maxNum ? disabledInc = true : disabledInc = false
    num > minNum ? disabledReset = false : disabledReset = true

    const onclickHandler1 = () => {
        if (num < maxNum) {
            setNum(num + 1)
        }
        console.log('onclickHandler1')
    }

    const onclickHandler2 = () => {
        setNum(minNum)
        console.log('onclickHandler2')
    }

    return (
        <div className="App">
            <Counter num={num} maxNum={maxNum}/>
            <Button name={'inc'} callBack={onclickHandler1} disabled={disabledInc}/>
            <Button name={'reset'} callBack={onclickHandler2} disabled={disabledReset}/>
        </div>
    );
}

export default App;
