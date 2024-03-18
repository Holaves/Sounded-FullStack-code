import { ObjectId } from "mongoose";
import { Track } from "src/track/schemas/track.schema";

export class CreateAlbumDto {
    readonly name: string;
    readonly artist: string;
}