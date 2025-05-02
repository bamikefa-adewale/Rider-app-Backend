import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  MinLength,
  MaxLength,
  IsNumber,
  Min,
  Max,
} from 'class-validator';

export class CreateDriverDto {
  @ApiProperty({
    description: 'Full name of the driver',
    example: 'Jane Doe',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(225)
  name: string;

  @ApiProperty({
    description: 'Email address',
    example: 'jane.doe@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Phone number (international format)',
    example: '+1234567890',
  })
  @IsNotEmpty()
  @IsPhoneNumber(undefined)
  phone: string;

  @ApiProperty({
    description: 'Driver license number',
    example: 'DL-2025-XY1234',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  license_number: string;

  @ApiProperty({
    description: 'Driver rating (from 0 to 5)',
    example: 4.5,
    default: 0,
  })
  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;
}
