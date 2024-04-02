import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from 'mongoose'
import { Playlist } from "src/playlist/schemas/playlist.schema";
import { Track } from "src/track/schemas/track.schema";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    id: number;

    @Prop({unique: true, required: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop()
    banned: boolean;

    @Prop()
    banReason: string;

    @Prop()
    picture: string;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tracks'}]})
    lastTracks: Track[]

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Playlist'}]})
    playlists: Playlist[]
}

export const UserSchema = SchemaFactory.createForClass(User)