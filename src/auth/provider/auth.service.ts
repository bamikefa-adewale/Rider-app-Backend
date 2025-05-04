import { SignInDto } from './../dto/sign-in.dto';
import { SignInProvider } from './sign-in.provider';
import { Injectable } from '@nestjs/common';
import { UpdateAuthDto } from '../dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    /**
     * Injecting user UsersService
     */
    private readonly SignInProvider: SignInProvider,
  ) {}
  public async signIn(signInDto: SignInDto) {
    return this.SignInProvider.signIn(signInDto);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    console.log(updateAuthDto);
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
