import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    
    constructor(private usersService: UsersService) {}

    @Get('')
    getAll(){
        return this.usersService.getAllUsers()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.usersService.getOneUser(id)
    }

    @Post('')
    createUser(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto)
    }
    @Delete('id')
    deleteUser(@Param('id') id: ObjectId) {
        return this.usersService.deleteUser(id)
    }
}
