export interface ISize {
    width: number;    
    height: number;    
}

export interface SizeState extends ISize {
}

export enum SizeActionType {
    RESIZE_HEIGHT = 'RESIZE_HEIGHT',
    RESIZE_WIDTH = 'RESIZE_WIDTH',
}

interface ResizeWidth {
    type: SizeActionType.RESIZE_WIDTH;
    payload: number;
}

interface ResizeHeight {
    type: SizeActionType.RESIZE_HEIGHT;
    payload: number;
}


export type SizeAction = ResizeWidth | ResizeHeight