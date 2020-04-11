import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/localAuth.guard';
import { JwtAuthGuard } from './guard/jwtAuth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/me')
    async getProfile(@Request() req) {
        return req.user;
    }
}
