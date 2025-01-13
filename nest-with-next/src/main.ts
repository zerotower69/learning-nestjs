import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextModule } from './next/next.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .get(NextModule)
    .prepare()
    .then(() => app.listen(process.env.PORT ?? 3000));
}
bootstrap();
