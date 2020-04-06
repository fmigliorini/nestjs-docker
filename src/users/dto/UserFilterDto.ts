import { UserStatus } from "../interfaces";
import { IsOptional, IsIn, IsNotEmpty } from "class-validator";

export default class UserFilterDto {    
    @IsOptional()
    @IsIn([UserStatus.ACTIVE, UserStatus.INACTIVE])
    isActive: UserStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}
