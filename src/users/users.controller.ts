import {
  Controller,
  Get,
  Post,
  HttpCode,
  Param,
  Body,
} from '@nestjs/common';
import { CreateUserDto } from './dto/';
import { UsersService } from './users.service';
import { User } from './interfaces';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService){}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id){
    return this.userService.findById(id);
  }

  @Post()
  @HttpCode(204)
  async create(@Body() createUserDto: CreateUserDto) {  
    return this.userService.create(createUserDto);
  }

  @Post()
  @HttpCode(204)
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.findAll();
  }
}
