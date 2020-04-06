import { IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export default class UpdateUserDto {
    @IsOptional()
    firstName: string;

    
    @IsOptional()
    lastName: string;

    
    @IsOptional()
    age: number;
    
    
    @IsOptional()
    @IsEmail()
    email: string;
    
    
    @IsOptional()
    username: string;
    
    
    @IsOptional()
    password: string;
}