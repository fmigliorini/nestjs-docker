import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}
    
    create(createUserDto: CreateUserDto) {
        this.userRepository.createUser(createUserDto);
    }

    async findById(id: number) {
        const found = await this.userRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`User with ID ${id} not found.`)
        }

        return found;
    }
}
