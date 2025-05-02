import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsString,
} from 'class-validator';
import { PaymentMethod } from '../enums/payment-method.enum';
import { PaymentStatus } from '../enums/payment-status.enum';

export class CreatePaymentDto {
  @ApiProperty({
    example: 'ride-uuid-123',
    description: 'ID of the related ride',
  })
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  ride_id: string;

  @ApiProperty({
    example: 'user-uuid-123',
    description: 'ID of the user making the payment',
  })
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @ApiProperty({ example: 25.5, description: 'Payment amount' })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({
    enum: PaymentMethod,
    example: PaymentMethod.CREDIT_CARD,
    description: 'Method of payment',
  })
  @IsEnum(PaymentMethod)
  payment_method: PaymentMethod;

  @ApiProperty({
    enum: PaymentStatus,
    example: PaymentStatus.PAID,
    description: 'Status of the payment',
  })
  @IsEnum(PaymentStatus)
  status: PaymentStatus;
}
