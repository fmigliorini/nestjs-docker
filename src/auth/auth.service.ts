import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import LocalStrategyDto from './dto/LocalStrategyDto';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    async validateUser(username: string, password: string): Promise<Partial<User>> {
        const user = await this.userService.findByUsername(username);

        if(user && user.password === password) {
            const { password, ...rest } = user;
            return rest;
        }

        return null;
    }
}
