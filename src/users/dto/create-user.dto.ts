import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    type: String,
    maxLength: 225,
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(225)
  name: string;

  @ApiProperty({
    description: 'The email address of the user',
    type: String,
    maxLength: 505,
    uniqueItems: true,
    example: 'john.doe@example.com',
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(505)
  email: string;

  @ApiProperty({
    description: 'The phone number of the user',
    type: String,
    maxLength: 15,
    example: '+1234567890',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(15)
  phone: string;

  @ApiProperty({ example: 'P@ssw0rd123', description: 'User password' })
  @MinLength(3)
  @MaxLength(1000)
  @IsString()
  @IsNotEmpty()
  password: string;
}
