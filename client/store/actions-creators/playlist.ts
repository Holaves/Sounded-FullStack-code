import { AppURL } from "@/layouts/MainLayout"
import { PlaylistAction, PlaylistActionTypes } from "@/types/playlist"
import { TrackAction, TrackActionTypes } from "@/types/track"
import axios from "axios"
import { Dispatch } from "redux"


export const fetchPlaylists = () => {
    return async (dispatch: Dispatch<PlaylistAction>) => {
        try {
            const response = await axios.get(`${AppURL}/playlists`)
            dispatch({
                type: PlaylistActionTypes.FETCH_PLAYLISTS,
                payload: response.data,
            })
        } catch (e) {
            dispatch({
                type: PlaylistActionTypes.FETCH_PLAYLISTS_ERROR,
                payload: 'Произошла ошибка при загрузке плейлистов',
            })
        }
    }
}

// export const searchPlaylistst = (query: string) => {
//     return async (dispatch: Dispatch<PlaylistAction>) => {
//         try {
//             const response = await axios.get(`${AppURL}/tracks/search?query=${query}`)
//             dispatch({
//                 type: PlaylistActionTypes.FETCH_PLAYLISTS,
//                 payload: response.data,
//             })
//         } catch (e) {
//             dispatch({
//                 type: PlaylistActionTypes.FETCH_PLAYLISTS_ERROR,
//                 payload: 'Произошла ошибка при загрузке треков',
//             })
//         }
//     }
// }