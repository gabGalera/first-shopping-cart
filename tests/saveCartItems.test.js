const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('if localStorage.setItem has been called', () => {
    saveCartItems([{id: 'MLB1986322829', title: 'Pc Computador Cpu Intel Core I5 + Ssd 240gb, 8gb Memória Ram', price: 1098}])
    expect(localStorage.setItem).toHaveBeenCalled()
  });

  // test('the saveCartItems return', () => {
  //   saveCartItems('MLB1986322829')
  //   expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', arg)
  // })
});
