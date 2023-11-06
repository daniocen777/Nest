import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from 'src/cars/cars.module';
import { BrandsModule } from 'src/brands/brands.module';


@Module({
  controllers: [SeedController],
  providers: [SeedService],
  // importar los moudlos para usar los servicios y llenar los seed
  imports: [CarsModule, BrandsModule]
})
export class SeedModule { }
