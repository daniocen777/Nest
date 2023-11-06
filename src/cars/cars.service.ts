import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
// npm i --save-dev @types/uuid
import { v4 as uuidv4 } from 'uuid'; // version 4 en el controller

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        /* {
            id: uuidv4(),
            brand: 'Toyota',
            model: 'Corola'
        }, */
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with ID '${id}' not found`);

        return car;
    }

    create(createCarDto: CreateCarDto) {
        const car: Car = {
            id: uuidv4(),
            ...createCarDto
        };

        this.cars.push(car);
        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        let carDB = this.findOneById(id);
        if (updateCarDto.id && updateCarDto.id !== id) throw new BadRequestException(`Car id is not value`)
        this.cars = this.cars.map((car: Car) => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                };
                return carDB;
            }
            return car;

        });

        return carDB;
    }

    delete(id: string) {
        const car = this.findOneById(id);
        this.cars = this.cars.filter((car: Car) => car.id !== id);
    }

    // Llenar la BD con la semilla (exportar el modulo para que modulo seed pueda usarlo)
    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;
    }
}
