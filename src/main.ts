import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

// Crea una instancia del logger
const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule, 
    {
      transport: Transport.TCP,
      options: {
        host: process.env.HOST,
        port: +process.env.PORT,
      }
    },
  );
  app.listen();

  logger.log('Microservice is listening...');
  logger.log('Options:');
  logger.log('HOST: '+ AppModule.host);
  logger.log('PORT: '+ AppModule.port);
};

bootstrap();