require('../mocks/fetchSimulator');

jest.setTimeout(10000);

const { expect } = require('@jest/globals');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('is a function', () => {
    expect(typeof fetchProducts).toBe('function')
  })

  test('if the fetch function was called', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })

  it('has the right endpoint', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  test('if fetchProducts structure matches computadorSearch', async () => {
    const report = await fetchProducts('computador');
    expect(report).toEqual(computadorSearch);
  })

  test('if an empty url throws an error', async () => {
    await expect(fetchProducts()).rejects.toBe('You must provide an url');
  })

  
});
