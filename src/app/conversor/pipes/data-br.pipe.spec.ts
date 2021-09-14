import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });
  it('deve formatar a data 2021-09-14 para 14/09/2021', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2021-09-14')).toEqual('14/09/2021');
  });
});
