const saveCartItems = (...entry) => {
  // seu código aqui
  const report = JSON.parse(localStorage.getItem('cartItems'));
  if (report === null) {
    const obj = { id: entry[0].id, title: entry[0].title, price: entry[0].price };
    localStorage.setItem('cartItems', JSON.stringify([obj]));
  } else {
    localStorage.removeItem('cartItems');
    const obj = { id: entry[0].id, title: entry[0].title, price: entry[0].price };
    report.push(obj);
    localStorage.setItem('cartItems', JSON.stringify(report));
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
