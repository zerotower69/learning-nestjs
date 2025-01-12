import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { RedisService } from './redis/redis.service';

@Injectable()
export class IpGuard implements CanActivate {
  constructor(private redisService: RedisService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const ip =
      request.headers['x-forwarded-for'] ||
      request.headers['x-real-ip'] ||
      request.socket.remoteAddress ||
      request.ip;
    const redis_key = 'limit_ip_' + ip;
    const data = await this.redisService.get(redis_key);
    const count = data ? parseInt(data) : 0;
    if (count >= 5) {
      return false;
    }
    await this.redisService.set(
      redis_key,
      data ? parseInt(data) + 1 : 1,
      'EX',
      60,
    );
    return true;
  }
}
