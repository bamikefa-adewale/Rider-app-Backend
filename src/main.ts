import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Urban Rider API')
    .setDescription(
      'API documentation for the Urban Rider application httpl://localhost3001',
    )
    .setVersion('1.0')
    .addTag('riders')
    .setVersion('1.0')
    .addServer('http://localhost:3001')
    .build();

  // await app.listen(3001);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
