export type IncValueActionType = ReturnType<typeof incValueAC>
export type ResetValueActionType = ReturnType<typeof resetValueAC>
export type SetMinValueActionType = ReturnType<typeof setMinValueAC>
export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
export type SetMinValueFromLSActionType = ReturnType<typeof setMinValueFromLSAC>

type ActionType = IncValueActionType | ResetValueActionType | SetMinValueActionType | SetMaxValueActionType | SetMinValueFromLSActionType

const initialState = {
    num: 0,
    min: 0,
    max: 5,
}

export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {
                ...state, num: state.num + 1
            }
        case 'RESET-VALUE':
            return {
                ...state, num: state.min
            }
        case 'SET-MIN-VALUE':
            return {
                ...state, min: action.value
            }
        case 'SET-MAX-VALUE':
            return {
                ...state, max: action.value
            }
        case 'SET-MIN-VALUE-FROM-LS':
            return {
                ...state, num: state.min
            }
        default:
            return state
    }

}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const resetValueAC = () => ({type: 'RESET-VALUE'} as const)
export const setMinValueAC = (value: number) => ({type: 'SET-MIN-VALUE', value} as const)
export const setMaxValueAC = (value: number) => ({type: 'SET-MAX-VALUE', value} as const)
export const setMinValueFromLSAC = () => ({type: 'SET-MIN-VALUE-FROM-LS'} as const)

