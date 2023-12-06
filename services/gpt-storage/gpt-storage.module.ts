import { Module } from '@nestjs/common';
import { GptStorageController } from './gpt-storage.controller';

@Module({
  controllers: [GptStorageController]
})
export class GptStorageModule {}
