import { Injectable } from '@nestjs/common';
import { RedisService as NestRedisService } from '@nestjs-modules/ioredis';

@Injectable()
export class RedisService {
  constructor(private readonly redisService: NestRedisService) {}

  async set(key: string, value: any, ttl?: number): Promise<void> {
    const client = this.redisService.getClient();
    await client.set(key, JSON.stringify(value));

    if (ttl) {
      await client.expire(key, ttl);
    }
  }

  async get(key: string): Promise<any> {
    const client = this.redisService.getClient();
    const data = await client.get(key);
    return data ? JSON.parse(data) : null;
  }

  // Add more methods as needed for your application
}