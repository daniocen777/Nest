import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

    @IsString({ message: `The brand must be string` })
    readonly brand: string;

    @IsString({ message: `The model must be string` })
    @MinLength(3)
    readonly model: string;
}