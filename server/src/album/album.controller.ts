import { Body, Controller, Delete, Get, Param, Post, Put, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AlbumService } from './album.service';
import { ObjectId } from 'mongoose';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateAlbumDto } from './dto/create-album.dto';
import { CreateTrackDto } from 'src/track/dto/create-track.dto';

@Controller('/albums')
export class AlbumController {

    constructor (private albumService: AlbumService) {}

    @Get()
    getAll(@Query('count') count: number) {
        return this.albumService.getAll(count)
    }
    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.albumService.getOne(id)
    }

    @Put('/like')
    listen(@Param('id') id: ObjectId) {
        return this.albumService.like(id)
    }

    
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateAlbumDto) {
        const { picture } = files
        return this.albumService.create(dto, picture[0])
    }

    @Post('/create/:id/addTrack/')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'audio', maxCount: 1}
    ]))
    addTrack(@Param('id') id: ObjectId, @Body() dto: CreateTrackDto, @UploadedFiles() files, ){
        const {audio} = files;
        return this.albumService.addTrack(dto, audio[0], id)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.albumService.delete(id)
    }

}
