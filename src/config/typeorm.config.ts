import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  "type": "mysql",
  "host": "localhost",
  "port": 3390,
  "username": "nest",
  "password": "1234",
  "database": "nestjs_database",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
};
