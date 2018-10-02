import { DocentiModule } from './docenti.module';

describe('DocentiModule', () => {
  let docentiModule: DocentiModule;

  beforeEach(() => {
    docentiModule = new DocentiModule();
  });

  it('should create an instance', () => {
    expect(docentiModule).toBeTruthy();
  });
});
