import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findByUsernameAndPassword(username, password);

        if(!user) {
            return null;
        }

        return user;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
