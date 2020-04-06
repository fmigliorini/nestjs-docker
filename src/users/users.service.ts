import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}
    
    async getUsers() {
        return this.userRepository.getUsers();
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return this.userRepository.createUser(createUserDto);
    }

    async getUserById(id: number): Promise<User> {
        const found = await this.userRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`User with ID ${id} not found.`);
        }

        return found;
    }

    async deleteUser(id: number): Promise<void>  {
        const result = await this.userRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`User with ID ${id} not found.`);
        }
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        await this.getUserById(id);
        const user = await this.userRepository.updateUser(id, updateUserDto);
        return user;
    }
}
