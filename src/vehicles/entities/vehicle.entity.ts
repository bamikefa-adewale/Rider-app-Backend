import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  driver_id: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  model?: string;

  @Column({ type: 'int', nullable: false })
  year: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  license_plate: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  make?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  color?: string;

  //   @ManyToOne(() => Driver, { onDelete: 'CASCADE' })
  //   @JoinColumn({ name: 'driver_id' })
  //   driver: [];
}
