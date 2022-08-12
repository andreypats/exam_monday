import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    name: string
    disabled: boolean
    callBack: ()=>void
}

export const Button = (props: ButtonPropsType) => {

    return (
        <div className={s.button}>
            <button disabled={props.disabled} onClick={props.callBack}>{props.name}</button>
        </div>
    )
}