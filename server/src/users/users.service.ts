import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FileService } from 'src/file/file.service';
import { User, UserDocument } from './schemas/users.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private fileService: FileService,
   ) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userModel.create({...dto, banned: false})
        return user;
    }
    async getAllUsers() {
        const users = await this.userModel.find()
        return users;
    }
    async getOneUser(id: ObjectId){
        const user = await this.userModel.findById(id)
        return user;
    }
    async deleteUser(id: ObjectId){
        const user = await this.userModel.findByIdAndDelete(id)
        return user;
    }
}
