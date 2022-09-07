import React, {FC} from "react";
import s from "./Button.module.css"
import Button from '@mui/material/Button';

type ButtonPropsType = {
    name: string
    disabled: boolean
    callBack: ()=>void
}

export const ButtonComponent: FC<ButtonPropsType> = (props) => {
    return (
        <div className={s.button}>
            <Button
                variant="contained"
                size="small"
                disabled={props.disabled}
                onClick={props.callBack}
                color={props.name === 'reset' ? 'secondary' : 'primary'}
            >{props.name}</Button>
        </div>
    )
}