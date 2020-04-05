import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { UserStatus } from '../interfaces';

export class UserStatusValidationPipe implements PipeTransform {
    readonly allowedStatus = [
        UserStatus.ACTIVE,
        UserStatus.INACTIVE,
    ];

    transform(value: any, any: ArgumentMetadata) {
        value = value.toUpperCase();

        if (!this.isValidStatus(value)) {
            throw new BadRequestException(`${value} is not a valid user status.`)
        }

        return value;
    }

    private isValidStatus(status: any) {
        return this.allowedStatus.indexOf(status) !== -1;
    }
}