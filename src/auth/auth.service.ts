import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import LocalStrategyDto from './dto/LocalStrategyDto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    async validateUser(localStrategyDto: LocalStrategyDto): Promise<any> {
        const { username, password} = localStrategyDto;

        const user = await this.userService.validateUser(username, password);

        if (!user) {
            throw new UnauthorizedException();
        }
        console.log('user', user);
        return user;
    }
}
