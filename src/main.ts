import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// npm i class-validator class-transformer (instalar para los dtos)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Para pipes globales (tomar los DTOs como request)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // solo toma valores del dto en el request (remueve data basura)
      forbidNonWhitelisted: true, // Para que tome como error valores que no estan en el dto
    })
  );
  await app.listen(3000);
}
bootstrap();
