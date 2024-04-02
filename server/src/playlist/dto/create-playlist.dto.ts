export class CreatePlaylistDto {
    readonly name: string;
    readonly author: string;
    readonly visible?: boolean;
}