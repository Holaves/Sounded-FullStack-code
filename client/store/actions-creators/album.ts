import { AppURL } from "@/layouts/MainLayout"
import { PlaylistAction, PlaylistActionTypes } from "@/types/playlist"
import { TrackAction, TrackActionTypes } from "@/types/track"
import axios from "axios"
import { Dispatch } from "redux"
import { AlbumAction, AlbumActionTypes } from "../../types/album"


export const fetchAlbum = () => {
    return async (dispatch: Dispatch<AlbumAction>) => {
        try {
            const response = await axios.get(`${AppURL}/albums`)
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUMS,
                payload: response.data,
            })
        } catch (e) {
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
                payload: 'Произошла ошибка при загрузке альбомов',
            })
        }
    }
}

// export const searchAlbum = (query: string) => {
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