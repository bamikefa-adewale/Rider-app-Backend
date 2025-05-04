import { Users } from './../entities/user.entity';
import { CreateUserProvider } from './create-user.provider';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { FindOneUserByEmailProvider } from './find-one-user-by-email';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    /**
     *  Injecting createUserProvider
     */
    private readonly createUserProvider: CreateUserProvider,

    /**
     *  Injecting FindOneUserByEmailProvider
     */
    private readonly findOneUserByEmailProvider: FindOneUserByEmailProvider,

    @InjectRepository(Users)
    private readonly usersRepo: Repository<Users>,
  ) {}
  public async createUser(createUserDto: CreateUserDto) {
    return this.createUserProvider.createUser(createUserDto);
  }

  public async FindOneByEmail(email: string) {
    return await this.findOneUserByEmailProvider.findOneByEmail(email);
  }

  // Method to get all users
  public async getAllUsers(): Promise<Users[]> {
    try {
      const users = await this.usersRepo.find();

      // If no users are found, throw an exception
      if (!users) {
        throw new NotFoundException('No users found.');
      }
      return users;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(`An error occurred while fetching users}`);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
