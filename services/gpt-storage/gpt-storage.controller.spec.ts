import { Test, TestingModule } from '@nestjs/testing';
import { GptStorageController } from './gpt-storage.controller';

describe('GptStorageController', () => {
  let controller: GptStorageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GptStorageController],
    }).compile();

    controller = module.get<GptStorageController>(GptStorageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
