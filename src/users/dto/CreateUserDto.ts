import { IsNotEmpty } from 'class-validator';

export default class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    age: number;
    
    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    password: string;
}