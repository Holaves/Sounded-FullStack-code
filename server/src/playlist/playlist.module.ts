import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from 'src/track/schemas/track.schema';
import { Playlist, PlaylistSchema } from './schemas/playlist.schema';
import { FileService } from 'src/file/file.service';

@Module({
  providers: [PlaylistService, FileService],
  controllers: [PlaylistController],
  imports: [
    MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
    MongooseModule.forFeature([{name: Playlist.name, schema: PlaylistSchema}]),
  ]
})
export class PlaylistModule {}
