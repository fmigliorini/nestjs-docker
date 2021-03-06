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
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/';
import { UsersService } from './users.service';
import { User } from './user.entity';
import UserFilterDto from './dto/UserFilterDto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService){}

  @Get()
  async getUsers(@Query(ValidationPipe) userFilterDto: UserFilterDto) {
    return this.userService.getUsers(userFilterDto);
  }

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
  async delete(@Param('id', ParseIntPipe) id ): Promise<void> {
    return this.userService.deleteUser(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    return this.userService.updateUser(id, updateUserDto);
  }
}
