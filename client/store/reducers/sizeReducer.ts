import { SizeAction, SizeActionType, SizeState } from "@/types/size"


const initialState: SizeState  = {
    width: 0,
    height: 0
}

export const sizeReducer = (state = initialState, action: SizeAction): SizeState => {
    switch (action.type) {
        case SizeActionType.RESIZE_HEIGHT:
            return {...state, height: action.payload}
        case SizeActionType.RESIZE_WIDTH:
            return {...state, width: action.payload}
        default:
            return state;
    }
}