import { Test, TestingModule } from '@nestjs/testing';
import { ExtractsController } from './extracts.controller';
import { ExtractsService } from './extracts.service';

describe('ExtractsController', () => {
  let controller: ExtractsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtractsController],
      providers: [ExtractsService],
    }).compile();

    controller = module.get<ExtractsController>(ExtractsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
