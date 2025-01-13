import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RedisService } from './redis/redis.service';

@Injectable()
export class AppService {
  constructor(private readonly redisService: RedisService) {}
  getHello(): string {
    return 'Hello World!';
  }

  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  async handleCron() {
    console.log('Called when the current time is 1AM');
    //删除所有的redis keys: limit_ip_*
    await this.redisService.del('limit_ip_*');
  }
}
