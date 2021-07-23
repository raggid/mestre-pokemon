import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { config, options } from './swagger-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
