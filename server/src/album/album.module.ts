import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { Album, AlbumSchema } from './schemas/album.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from 'src/track/schemas/track.schema';
import { FileService } from 'src/file/file.service';
import { TrackService } from 'src/track/track.service';
import { Comment, CommentSchema } from 'src/track/schemas/comment.schema';

@Module({
  controllers: [AlbumController],
  providers: [AlbumService, FileService, TrackService],
  imports: [
    MongooseModule.forFeature([{name: Album.name, schema: AlbumSchema}]),
    MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
    MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]),

  ]
})
export class AlbumModule {}
