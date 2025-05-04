import {
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/user.entity';

@Injectable()
export class FindOneUserByEmailProvider {
  constructor(
    /**
     * Inject usesRepository
     */
    @InjectRepository(Users)
    private readonly usesRepository: Repository<Users>,
  ) {}

  public async findOneByEmail(email: string) {
    let user: Users | null = null;

    try {
      user = await this.usesRepository.findOneBy({
        email,
      });
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: 'could not fetch the user',
      });
    }

    if (!user) {
      throw new UnauthorizedException('no user found');
    }
    return user;
  }
}
