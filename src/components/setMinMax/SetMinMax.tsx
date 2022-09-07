import React, {ChangeEvent} from "react";
import {TextField} from "@mui/material";
import s from "../setMinMax/SetMinMax.module.css";


type SetterMinMaxPropsType = {
    name: string
    minNum?: number
    maxNum?: number
    callBack: (event: ChangeEvent<HTMLInputElement>)=>void
    error: boolean
}

export const SetterMinMax = (props: SetterMinMaxPropsType) => {

    return (
            <div className={s.setMinMax}>
                <h4>{props.name}</h4>
                <TextField
                    variant="standard"
                    size="small"
                    type="number"
                    style={{width: "100px"}}
                    value={props.maxNum ? props.maxNum : props.minNum}
                    onChange={props.callBack}
                    error={props.error}
                    helperText={props.error && "Incorrect value!" }
                />
            </div>

)
}
