import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  // Exportarlo para que pueda ejecutarse los seeds
  exports: [CarsService]
})
export class CarsModule { }
