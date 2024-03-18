import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './schemas/album.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Track, TrackDocument } from 'src/track/schemas/track.schema';
import { FileService, FileType } from 'src/file/file.service';
import { TrackService } from 'src/track/track.service';
import { CreateTrackDto } from 'src/track/dto/create-track.dto';

@Injectable()
export class AlbumService {
    constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
                            private fileService: FileService,
                            private trackService: TrackService) {}

    async addTrack(dto: CreateTrackDto, audio, id: ObjectId){
        const album = await this.albumModel.findById(id)
        const track = await this.trackService.create({...dto, artist: dto.artist ? dto.artist : album.artist, albumId: id}, album.picture, audio)

        return track;
    }
    async getAll(count: number): Promise<Album[]> {
        const albums = await this.albumModel.find().limit(Number(count)).populate('tracks')
        return albums;
    }
    async getOne(id: ObjectId): Promise<Album> {
        const album = await this.albumModel.findById(id).populate('tracks')
        return album;
    }
    async like(id: ObjectId): Promise<number> {
        const album = await this.albumModel.findById(id)
        album.likes += 1
        album.save()
        return album.likes;
    }
    async create(dto: CreateAlbumDto, picture): Promise<Album>{
        try {
            const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
            const album = await this.albumModel.create({...dto, likes: 0, picture: picturePath})

            return album;
        } catch (error) {
            console.log(error)
        }
    }
    async delete(id: ObjectId) {
        const album = await this.albumModel.findByIdAndDelete(id)
        return album._id;
    }

}
