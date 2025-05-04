import { SignInDto } from './../dto/sign-in.dto';
import {
  forwardRef,
  Inject,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { HashingProvider } from 'src/auth/provider/hashing.provider';
import { UsersService } from 'src/users/provider/users.service';
export class SignInProvider {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    /**
     * Injecting HashingProvider
     */
    private readonly hashingProvider: HashingProvider,
  ) {}

  public async signIn(signInDto: SignInDto) {
    // Find the user using email ID
    const user = await this.usersService.FindOneByEmail(signInDto.email);

    //compare password to the hash
    let isEqual: boolean = false;

    try {
      isEqual = await this.hashingProvider.comparePassword(
        signInDto.password,
        user.password,
      );
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: 'could not compare passwords',
      });
    }

    if (!isEqual) {
      throw new UnauthorizedException('incorrect password');
    }

    return true;
  }
}
