import { Test, TestingModule } from '@nestjs/testing';
import { OzClientService } from './oz-client.service';

describe('OzClientService', () => {
  let service: OzClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OzClientService],
    }).compile();

    service = module.get<OzClientService>(OzClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
