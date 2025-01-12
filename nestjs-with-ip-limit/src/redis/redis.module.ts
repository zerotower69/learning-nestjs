import { Module, DynamicModule } from '@nestjs/common';
import { RedisOptions } from 'ioredis';
import { RedisService } from './redis.service';

@Module({})
export class RedisModule {
  static forRoot(optionts: RedisOptions): DynamicModule {
    return {
      module: RedisModule,
      providers: [
        {
          provide: 'REDIS_OPTIONS',
          useValue: optionts,
        },
        {
          provide: RedisService,
          useFactory: (options: RedisOptions) => {
            return new RedisService(options);
          },
          inject: ['REDIS_OPTIONS'],
        },
      ],
      exports: [RedisService],
    };
  }
}
