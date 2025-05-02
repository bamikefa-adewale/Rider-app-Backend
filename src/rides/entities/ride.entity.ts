import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { RideStatus } from '../enums/ride-status.enum';

@Entity('rides')
export class Ride {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  user_id: string;

  @Column({ type: 'uuid', nullable: false })
  driver_id: string;

  @Column({ type: 'uuid', nullable: false })
  vehicle_id: string;

  @Column({ type: 'varchar', length: 2000000 })
  pickup_location: string;

  @Column({ type: 'varchar', length: 2000000 })
  dropoff_location: string;

  @CreateDateColumn({ type: 'timestamp' })
  requested_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  started_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  completed_at: Date;

  @Column({
    type: 'enum',
    enum: RideStatus,
    nullable: false,
    default: RideStatus.COMPLETED,
  })
  status: RideStatus;

  @Column({ type: 'float', nullable: false })
  fare_cost: number;

  //work on relationship of these three later

  //   @ManyToOne(() => User, { onDelete: 'CASCADE' })
  //   @JoinColumn({ name: 'user_id' })
  //   user: User;

  //   @ManyToOne(() => Driver, { onDelete: 'CASCADE' })
  //   @JoinColumn({ name: 'driver_id' })
  //   driver: Driver;

  //   @ManyToOne(() => Vehicle, { onDelete: 'CASCADE' })
  //   @JoinColumn({ name: 'vehicle_id' })
  //   vehicle: Vehicle;
}
