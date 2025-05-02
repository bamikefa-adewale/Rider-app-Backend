import {
  IsOptional,
  IsString,
  IsUUID,
  IsInt,
  Length,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVehicleDto {
  @ApiProperty({
    description: 'UUID of the driver assigned to this vehicle',
    example: 'a7f7f749-1c56-4bfb-9b92-3bff7e5e5e5c',
  })
  @IsNotEmpty()
  @IsUUID()
  driver_id: string;

  @ApiPropertyOptional({
    description: 'Manufacturer or brand of the vehicle',
    example: 'Toyota',
  })
  @IsOptional()
  @IsString()
  @Length(1, 100)
  make?: string;

  @ApiPropertyOptional({
    description: 'Model of the vehicle',
    example: 'Corolla',
  })
  @IsOptional()
  @IsString()
  @Length(1, 100)
  model?: string;

  @ApiProperty({
    description: 'Manufacturing year of the vehicle',
    example: 2021,
  })
  @IsInt()
  @IsNotEmpty()
  year: number;

  @ApiProperty({
    description: 'License plate number of the vehicle',
    example: 'ABC-1234',
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  license_plate: string;

  @ApiProperty({
    description: 'Color of the vehicle',
    example: 'Blue',
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  color: string;
}
