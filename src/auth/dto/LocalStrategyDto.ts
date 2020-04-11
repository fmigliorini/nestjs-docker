import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export default class LocalStrategyDto {
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(12)
    username: string;
    
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(16)
    password: string;
}