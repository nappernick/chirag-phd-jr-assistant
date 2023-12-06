import { Test, TestingModule } from '@nestjs/testing';
import { GptStorageService } from './gpt-storage.service';

describe('GptStorageService', () => {
  let service: GptStorageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GptStorageService],
    }).compile();

    service = module.get<GptStorageService>(GptStorageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
