import { PrimaryGeneratedColumn, Entity, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    email: string;
    
    @Column()
    username: string;
    
    @Column()
    password: string;
}