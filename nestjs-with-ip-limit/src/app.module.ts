import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';
import { IpGuard } from './ip.guard';
import { RedisModule } from './redis/redis.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    RedisModule.forRoot({
      host: 'localhost',
      port: 6378,
      db: 0,
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: IpGuard,
    },
  ],
})
export class AppModule {}
