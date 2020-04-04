import { Injectable } from '@nestjs/common';
import { User} from './interfaces';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    create(user: User) {
        this.users.push(user);
    }

    findAll(): User[] {
        return this.users;
    }

    findById(id: Number): User {
        return this.users.find(x => x.id === id)
    }
}
