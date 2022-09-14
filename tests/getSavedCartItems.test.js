const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  test('if localStorage.setItem has been called', () => {
    getSavedCartItems([{id: 'MLB1986322829', title: 'Pc Computador Cpu Intel Core I5 + Ssd 240gb, 8gb Memória Ram', price: 1098}])
    expect(localStorage.getItem).toHaveBeenCalled()
  });
});
