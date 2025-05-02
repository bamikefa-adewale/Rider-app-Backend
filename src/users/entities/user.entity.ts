import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 225, nullable: false })
  name: string;

  @Column({ unique: true, type: 'varchar', length: 505 })
  email: string;

  @Column({ unique: true, type: 'varchar', length: 15, nullable: false })
  phone: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
