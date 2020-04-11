import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import LocalStrategyDto from './dto/LocalStrategyDto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    // @UsePipes(ValidationPipe)
    // async login(@Body() localStrategyDto: LocalStrategyDto): Promise<any> {
        // return this.authService.validateUser();
    // }
    async login(@Request() req) {
        return req.user;
    }
}
