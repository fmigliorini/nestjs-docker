import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto";
import { UserStatus } from "./interfaces";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(createTaskDto: CreateUserDto): Promise<User> {
        const {
            firstName,
            lastName,
            age,
            email,
            password,
            username,
        } = createTaskDto;

        const user = new User();
        
        user.firstName = firstName;
        user.lastName = lastName;
        user.age = age;
        user.email = email;
        user.password = password;
        user.username = username;

        user.isActive = UserStatus.ACTIVE;

        const save =await user.save();
        console.log(save);
        return user;
    }
}
