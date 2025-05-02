import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './provider/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],

  imports: [TypeOrmModule.forFeature([Users])],
})
export class UsersModule {}
