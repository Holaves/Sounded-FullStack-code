import { Module } from "@nestjs/common";
import { TrackModule } from './track/track.module';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { AlbumModule } from './album/album.module';
import { PlaylistService } from './playlist/playlist.service';
import { PlaylistModule } from './playlist/playlist.module';
import * as path from 'path'


@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASSWORD}@cluster0.z8vmkcc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`),
    TrackModule,
    FileModule,
    AlbumModule,
    PlaylistModule
  ],
  providers: []
})
export class AppModule{}