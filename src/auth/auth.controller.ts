import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import LocalStrategyDto from './dto/LocalStrategyDto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post('/login')
    @UsePipes(ValidationPipe)
    async login(@Body() localStrategyDto: LocalStrategyDto): Promise<any> {
        // return this.authService.validateUser();
    }
    
}
