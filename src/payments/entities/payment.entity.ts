import { Ride } from 'src/rides/entities/ride.entity';
import { Users } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PaymentStatus } from '../enums/payment-status.enum';
import { PaymentMethod } from '../enums/payment-method.enum';
import { IsNotEmpty } from 'class-validator';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  ride_id: string;

  @Column({ type: 'uuid' })
  user_id: string;

  @ManyToOne(() => Ride, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ride_id' })
  ride: Ride;

  @ManyToOne(() => Users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @Column({ type: 'float', nullable: false })
  @IsNotEmpty()
  amount: number;

  @Column({
    type: 'enum',
    enum: PaymentMethod,
    nullable: false,
    default: PaymentMethod.BANK_TRANSFER,
  })
  payment_method: string;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    nullable: false,
    default: PaymentStatus.PAID,
  })
  status: string;

  @CreateDateColumn({ type: 'timestamp' })
  paid_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
