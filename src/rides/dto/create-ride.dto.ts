import {
  IsUUID,
  IsString,
  IsOptional,
  IsDateString,
  IsNumber,
  Length,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RideStatus } from '../enums/ride-status.enum';

export class CreateRideDto {
  @ApiProperty({
    example: 'a5b2c3d4-5678-1234-9abc-1234567890ef',
    description: 'User ID',
  })
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  user_id: string;

  @ApiProperty({
    example: 'd4c3b2a1-8765-4321-ba98-0987654321dc',
    description: 'Driver ID',
  })
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  driver_id: string;

  @ApiProperty({
    example: 'e6f7g8h9-2345-6789-cdef-112233445566',
    description: 'Vehicle ID',
  })
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  vehicle_id: string;

  @ApiProperty({ example: '123 Main St, City', description: 'Pickup location' })
  @IsNotEmpty()
  @IsString()
  @Length(1, 2000000)
  pickup_location: string;

  @ApiProperty({ example: '456 Oak St, City', description: 'Dropoff location' })
  @IsNotEmpty()
  @IsString()
  @Length(1, 2000000)
  dropoff_location: string;

  @ApiProperty({
    example: '2025-05-02T14:00:00Z',
    description: 'Request timestamp',
  })
  @IsString()
  @IsNotEmpty()
  @IsDateString()
  requested_at: string;

  @ApiProperty({
    example: '2025-05-02T14:10:00Z',
    description: 'Start timestamp',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  started_at?: string;

  @ApiProperty({
    example: '2025-05-02T14:30:00Z',
    description: 'Completion timestamp',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  completed_at?: string;

  @ApiProperty({ enum: RideStatus, description: 'Ride status' })
  @IsString()
  @IsNotEmpty()
  @IsEnum(RideStatus)
  status: RideStatus;

  @ApiProperty({ example: 45.75, description: 'Fare for the ride' })
  @IsNumber()
  @IsNotEmpty()
  fare_cost: number;
}
