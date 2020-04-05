import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}
    
    // create(user: User) {
        
    // }

    // findAll(): User[] {
    //     return [];
    // }

    async findById(id: number) {
        const found = await this.userRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`User with ID ${id} not found.`)
        }

        return found;
    }
}
