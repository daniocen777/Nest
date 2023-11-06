import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brand.seed';


@Injectable()
export class SeedService {

  constructor(private readonly _carsService: CarsService, private readonly _brandsService: BrandsService) { }

  // Semillas
  populeteDB() {
    this._carsService.fillCarsWithSeedData(CARS_SEED);
    this._brandsService.fillCarsWithSeedData(BRANDS_SEED);
    return 'Seed executed';
  }

}
