require('../mocks/fetchSimulator');
const { expect } = require('@jest/globals');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('is a function', () => {
    expect(typeof fetchItem).toBe('function');
  })

  test('if the fetch function has been called', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled()
  })

  test('if fetchItem has the same structure as item', async () => {
    const report = await fetchItem('MLB1615760527');
    expect(report).toEqual(item);
  })

  test('if it has to provide an url', async () => {
    await expect(fetchItem()).rejects.toBe('You must provide an url');
  })
});
