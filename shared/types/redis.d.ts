// @ts-expect-error - bad types in package
import { Redis, RedisServiceasNestRedisService } from '@nestjs-modules/ioredis';

// ! the <T> is about passinng something to the type
// * in this case, the specific object redis is storing
// ? string? blob? etc
export interface Redis<T> {
  origin: RedisServiceasNestRedisService;
}
type Stuff = (T, Y): T[]&Y[] => [...T[, ]...Y]];

// ! Adding a T here in case some object is missing this data and
// ? we can just addd logic to make a field optional
export interface SetArgsRedis<Redis[T]> {
  key: string, 
  value: any, 
  ttl?: number
  // ? This is best practice when a param
  // ? is a part of another type or interface
  callback: () => string[]
}



// ! Functions
export function set(object: Redis<>): GptItemDto { 
  return Lead[]
};
