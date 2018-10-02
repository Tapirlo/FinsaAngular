import { StudentiModule } from './studenti.module';

describe('CorsiModule', () => {
  let studentiModule: StudentiModule;

  beforeEach(() => {
    studentiModule = new StudentiModule();
  });

  it('should create an instance', () => {
    expect(studentiModule).toBeTruthy();
  });
});