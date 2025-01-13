import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NextModule } from './next/next.module';
import { NextMiddleware } from './next/next.middleware';

@Module({
  imports: [NextModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(NextMiddleware).forRoutes('/');
  }
}
