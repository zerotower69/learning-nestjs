import { Injectable } from '@nestjs/common';

import Client, { type RedisOptions } from 'ioredis';

@Injectable()
export class RedisService extends Client {
  constructor(options: RedisOptions) {
    super(options);
  }
}
