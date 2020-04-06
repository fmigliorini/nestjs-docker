import { IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export default class UpdateUserDto {
    @IsOptional()
    @IsNotEmpty()
    firstName: string;

    
    @IsOptional()
    @IsNotEmpty()
    lastName: string;

    
    @IsOptional()
    @IsNotEmpty()
    age: number;
    
    
    @IsOptional()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    
    @IsOptional()
    @IsNotEmpty()
    username: string;
    
    
    @IsOptional()
    @IsNotEmpty()
    password: string;
}