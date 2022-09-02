import React, {ChangeEvent} from "react";


type SetterMinMaxPropsType = {
    name: string
    minNum?: number
    maxNum?: number
    callBack: (event: ChangeEvent<HTMLInputElement>)=>void
}

export const SetterMinMax = (props: SetterMinMaxPropsType) => {

    return (
        <div>
            <div>
                {props.name}
                <input type="number" value={props.maxNum ? props.maxNum : props.minNum} onChange={props.callBack}/>
            </div>
        </div>
)
}
