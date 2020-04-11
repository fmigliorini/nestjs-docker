import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    async validateUser(username: string, password: string): Promise<Partial<User>> {
        const user = await this.userService.findByUsernameAndPassword(username, password);

        if(!user) {
            return null;
        }

        return user;
    }
}
