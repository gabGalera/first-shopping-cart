const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('if localStorage.setItem has been called', () => {
    saveCartItems('MLB198632282')
    expect(localStorage.setItem).toHaveBeenCalled()
  });

  test('the saveCartItems return', () => {
    saveCartItems('MLB198632282')
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', arg)
  })
});
