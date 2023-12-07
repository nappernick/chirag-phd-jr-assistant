import { RedisBlob } from "../../redis/dto/redis-blob.ts";

export interface GptItemDto extends RedisBlob {
  authtoken: string;
  authtokenexpire: string | Date;
}
