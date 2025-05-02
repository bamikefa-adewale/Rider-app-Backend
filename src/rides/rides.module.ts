import { Module } from '@nestjs/common';
import { RidesController } from './rides.controller';
import { RidesService } from './provider/rides.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ride } from './entities/ride.entity';

@Module({
  controllers: [RidesController],
  providers: [RidesService],
  imports: [TypeOrmModule.forFeature([Ride])],
})
export class RidesModule {}
