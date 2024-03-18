import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Playlist, PlaylistDocument } from './schemas/playlist.schema';
import { Model, ObjectId } from 'mongoose';
import { Track, TrackDocument } from 'src/track/schemas/track.schema';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class PlaylistService {

    constructor(@InjectModel(Playlist.name) private playlistModel: Model<PlaylistDocument>,
                @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                private fileService: FileService) {}

    async create(dto: CreatePlaylistDto, picture): Promise<Playlist>{
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        const album = await this.playlistModel.create({...dto, picture: picturePath})

        return album;
    }

    async addTrack(id: ObjectId, trackId: ObjectId) {
        const playlist = await this.playlistModel.findById(id)
        const track = await this.trackModel.findById(trackId)

        playlist.tracks.push(track._id)
        await playlist.save()
        
        return track;
    }

    async deleteTrack(id: ObjectId, trackId: ObjectId) {
        const playlist = await this.playlistModel.findById(id)
        const track = await this.trackModel.findById(trackId)

        const index = playlist.tracks.indexOf(track._id);
        if (index !== -1) {
            playlist.tracks.splice(index, 1);
            await playlist.save()
        }
        // playlist.tracks.push(track._id)
        
        return track;
    }


    async getOne(id: ObjectId): Promise<Playlist> {
        const playlist = await this.playlistModel.findById(id).populate('tracks')
        return playlist;
    }
    async getAll(): Promise<Playlist[]> {
        const playlists = await this.playlistModel.find().populate('tracks')
        return playlists;
    }
    async delete(id: ObjectId) {
        const playlist = await this.playlistModel.findByIdAndDelete(id)
        return playlist._id;
    }
}
