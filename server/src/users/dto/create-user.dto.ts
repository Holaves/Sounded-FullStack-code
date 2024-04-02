import { ObjectId } from "mongoose";
import { Track } from "src/track/schemas/track.schema";

export class CreateUserDto {
    readonly name?: string;
    readonly password: string;
    readonly email: string;
}