import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HashingProvider } from 'src/auth/provider/hashing.provider';
import {
  BadRequestException,
  forwardRef,
  Inject,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

export class CreateUserProvider {
  constructor(
    /**
     * Injecting userRepository
     */
    @InjectRepository(Users)
    private readonly userRepo: Repository<Users>,

    /**
     * Injecting HashingProvider
     */
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    //check if user exist with same email
    let existingUser: Users | null = null;
    try {
      existingUser = await this.userRepo.findOne({
        where: { email: createUserDto.email },
      });
    } catch (error) {
      console.error('Database query error:', error);
      throw new RequestTimeoutException(
        'Unable to process your request at the moment pleace try later ',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    // handle Exception
    if (existingUser)
      throw new BadRequestException('User with this email already exists');

    //Creating and save new user
    let newUser = this.userRepo.create({
      ...createUserDto,
      password: await this.hashingProvider.hashPassword(createUserDto.password),
    });

    // save...
    try {
      newUser = await this.userRepo.save(newUser);
    } catch (error) {
      console.error('Database query error:', error);

      throw new RequestTimeoutException(
        'Unable to process your request at the moment pleace try later ',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    // return the saved

    return newUser;
  }

  //
}
