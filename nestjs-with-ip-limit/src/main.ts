import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// fetch('http://localhost:3000', {
//   headers: {
//     Origin: 'https://www.zerotower.cn',
//   },
// })
//   .then((resp) => resp.text())
//   .then(console.log)
//   .catch(console.error);
