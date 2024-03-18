import { PlayerAction, PlayerActionTypes } from "@/types/player";
import { SizeAction, SizeActionType } from "@/types/size";
import { ITrack } from "@/types/track";


export const setHeight = (payload: number): SizeAction => {
    return  {type: SizeActionType.RESIZE_HEIGHT, payload}
}
export const setWidth = (payload: number): SizeAction => {
    return  {type: SizeActionType.RESIZE_WIDTH, payload}
}
