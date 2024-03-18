import { AlbumAction, AlbumActionTypes, AlbumState } from "@/types/album"
import { PlaylistAction, PlaylistActionTypes, PlaylistState } from "@/types/playlist"


const initialState: AlbumState  = {
    albums: [],
    error: ''
}

export const albumReducer = (state = initialState, action: AlbumAction): AlbumState => {
    switch (action.type) {
        case AlbumActionTypes.FETCH_ALBUMS_ERROR:
            return {...state, error: action.payload}
        case AlbumActionTypes.FETCH_ALBUMS:
            return {error: '', albums: action.payload}
        default:
            return state;
    }
}