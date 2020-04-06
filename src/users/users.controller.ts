import {
  Controller,
  Get,
  Post,
  HttpCode,
  Param,
  Body,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService){}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id) : Promise<User> {
    return this.userService.getUserById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @HttpCode(204)
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {  
    return this.userService.createUser(createUserDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id ) : Promise<void> {
    return this.userService.deleteUser(id);
  }
}
