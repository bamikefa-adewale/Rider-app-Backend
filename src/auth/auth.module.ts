import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './provider/auth.service';
import { AuthController } from './auth.controller';
import { HashingProvider } from './provider/hashing.provider';
import { BcryptProvider } from './provider/bcrypt.provider';
import { UsersModule } from 'src/users/users.module';
import { SignInProvider } from './provider/sign-in.provider';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    SignInProvider,
    {
      provide: HashingProvider,
      useClass: BcryptProvider,
    },
  ],
  imports: [forwardRef(() => UsersModule)],
  exports: [AuthService, SignInProvider, HashingProvider],
})
export class AuthModule {}
