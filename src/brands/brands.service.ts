import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    /* {
      id: uuidv4(),
      name: '',
      createdAt: new Date().getTime()
    } */
  ];

  create(createBrandDto: CreateBrandDto): Brand {
    const brand: Brand = {
      id: uuidv4(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime()
    };

    this.brands.push(brand);

    return brand;
  }

  findAll(): Brand[] {
    return this.brands
  }

  findOne(id: string): Brand {
    const brand = this.brands.find((b: Brand) => b.id === id);
    if (!brand) throw new NotFoundException(`Brand with id '${id}' not found`)
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map((b: Brand) => {
      if (b.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = {
          ...brandDB, ...updateBrandDto
        };
        return brandDB;
      }
      return b;
    });
    return brandDB;
  }

  remove(id: string) {
    this.brands = this.brands.filter((b: Brand) => b.id !== id);
  }

  // Llenar la BD con la semilla (exportar el modulo para que modulo seed pueda usarlo)
  fillCarsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
