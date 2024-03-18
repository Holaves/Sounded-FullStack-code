import { PlaylistAction, PlaylistActionTypes, PlaylistState } from "@/types/playlist"


const initialState: PlaylistState  = {
    playlists: [],
    error: ''
}

export const playlistReducer = (state = initialState, action: PlaylistAction): PlaylistState => {
    switch (action.type) {
        case PlaylistActionTypes.FETCH_PLAYLISTS_ERROR:
            return {...state, error: action.payload}
        case PlaylistActionTypes.FETCH_PLAYLISTS:
            return {error: '', playlists: action.payload}
        default:
            return state;
    }
}