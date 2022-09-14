const saveCartItems = (...entry) => {
  // seu código aqui
    localStorage.setItem('cartItems', JSON.stringify(entry));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
