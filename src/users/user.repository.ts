import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { UserStatus } from "./interfaces";
import UserFilterDto from "./dto/UserFilterDto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async getUsers(userFilterDto: UserFilterDto): Promise<User[]> {
        const {search, isActive} = userFilterDto;

        const query = await this.createQueryBuilder('user');

        if (isActive) {
            query.andWhere('user.isActive = :isActive', {isActive});
        }

        if (search) {
            query.andWhere(
                'user.firstName LIKE :search OR user.lastName LIKE :search',
                {search: `%${search}%`}
            );
        }

        const users = query.getMany();

        return users;
    }
    
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

        const save = await user.save();
        
        return save;
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto) {
        const user =  await this.save({...updateUserDto, id});
        
        return user;
    }

    async validateUser(username: string, password: string) {
        const query = await this.createQueryBuilder('user');

        query.andWhere(
            'user.username = :username AND user.password = :password',
            {
                username,
                password,
            }
        );

        const user = query.getOne();

        return user;
    }
}
