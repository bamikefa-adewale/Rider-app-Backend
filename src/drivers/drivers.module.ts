import { Module } from '@nestjs/common';

import { DriversController } from './drivers.controller';
import { DriversService } from './provider/drivers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './entities/driver.entity';

@Module({
  controllers: [DriversController],
  providers: [DriversService],
  imports: [TypeOrmModule.forFeature([Driver])],
})
export class DriversModule {}
