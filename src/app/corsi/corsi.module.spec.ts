import { CorsiModule } from './corsi.module';

describe('CorsiModule', () => {
  let corsiModule: CorsiModule;

  beforeEach(() => {
    corsiModule = new CorsiModule();
  });

  it('should create an instance', () => {
    expect(corsiModule).toBeTruthy();
  });
});
