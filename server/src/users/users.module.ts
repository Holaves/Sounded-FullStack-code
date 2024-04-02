import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/users.schema';
import { FileService } from 'src/file/file.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, FileService],
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
  ]
})
export class UsersModule {}
