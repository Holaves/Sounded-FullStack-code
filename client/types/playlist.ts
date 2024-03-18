import { ITrack } from "./track";

export interface IPlaylist {
    name: string;
    author: string;
    picture: string;
    tracks: ITrack[];
}

export interface PlaylistState {
    playlists: IPlaylist[];
    error: string;
}

export enum PlaylistActionTypes {
    FETCH_PLAYLISTS = 'FETCH_PLAYLISTS',
    FETCH_PLAYLISTS_ERROR = 'FETCH_PLAYLISTS_ERROR',
}

interface FetchPlaylistsAction {
    type: PlaylistActionTypes.FETCH_PLAYLISTS;
    payload: IPlaylist[]
}

interface FetchPlaylistsErrorAction {
    type: PlaylistActionTypes.FETCH_PLAYLISTS_ERROR;
    payload: string
}


export type PlaylistAction = FetchPlaylistsAction | FetchPlaylistsErrorAction