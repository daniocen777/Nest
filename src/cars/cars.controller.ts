import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
export class CarsController {

    constructor(private readonly _carsService: CarsService) { }

    @Get()
    getAllCars() {
        return this._carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
        return this._carsService.findOneById(id);
    }

    // @UsePipes(ValidationPipe) => Para que tomen DTOs => general (main)
    // npm i class-validator class-transformer (instalar para los dtos)
    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        return this._carsService.create(createCarDto);
    }

    /* @Patch(':id')
    updateCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id: number, @Body() body: any) {
        return body;
    } */

    @Patch(':id')
    updateCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string, @Body() updateCarDto: UpdateCarDto) {
        return this._carsService.update(id, updateCarDto);
    }


    @Delete(':id')
    deleteCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
        return this._carsService.delete(id);
    }
}
