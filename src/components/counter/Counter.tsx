import React from "react";
import s from "./Counter.module.css"

type CounterPropsType = {
    num: number
    maxNum: number
}

export const Counter = (props: CounterPropsType) => {

    return (
        <div className={s.counter}>
            <h1 className={props.num === props.maxNum ? s.h1Counter : ''}>{props.num}</h1>
        </div>
    )
}
