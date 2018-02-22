import { ToUpperCasePipe } from './to-upper-case.pipe';

describe('ToUpperCasePipe', () => {
  it('create an instance', () => {
    const pipe = new ToUpperCasePipe();
    expect(pipe).toBeTruthy();
  });
});
