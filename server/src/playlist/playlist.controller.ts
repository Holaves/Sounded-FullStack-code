import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { PlaylistService } from './playlist.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('/playlists')
export class PlaylistController {

    constructor(private playlistService: PlaylistService) {}

    @Get('')
    getAll() {
        return this.playlistService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.playlistService.getOne(id)
    }

    @Post('')
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'picture', maxCount: 1},
    ]))
    create(@UploadedFiles() files , @Body() dto: CreatePlaylistDto  ) {
        const {picture} = files;
        return this.playlistService.create(dto, picture[0])
    }

    @Post('/tracks/:id')
    addTrack(@Param('id') id: ObjectId, @Body('trackId') trackId: ObjectId) {
        return this.playlistService.addTrack(id, trackId)
    }
    @Delete('/tracks/:id')
    deleteTrack(@Param('id') id: ObjectId, @Body('trackId') trackId: ObjectId){
        return this.playlistService.deleteTrack(id, trackId)
    }
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.playlistService.delete(id)
    }
}
