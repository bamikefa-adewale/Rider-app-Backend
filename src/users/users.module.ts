import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './provider/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { CreateUserProvider } from './provider/create-user.provider';
import { FindOneUserByEmailProvider } from './provider/find-one-user-by-email';

@Module({
  controllers: [UsersController],
  providers: [UsersService, CreateUserProvider, FindOneUserByEmailProvider],
  exports: [UsersService],
  imports: [TypeOrmModule.forFeature([Users]), forwardRef(() => AuthModule)],
})
export class UsersModule {}
