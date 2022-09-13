// const fetch = require('node-fetch');

const fetchItemAPI = async (ItemID) => fetch(`https://api.mercadolibre.com/items/${ItemID}`);

const fetchItem = async (ItemID) => {
  // seu código aqui
  try {
    if (typeof ItemID === 'undefined') {
      throw new Error('You must provide an url');
    }
    const listaItems = {};
    const getAPI = await fetchItemAPI(ItemID)
      .then((response) => response.json());
    listaItems.id = getAPI.id;
    listaItems.title = getAPI.title;
    listaItems.price = getAPI.price;
    return listaItems;
  } catch (error) {
    throw await error.message;
  }
};

// const entry = fetchItem('MLB1341706310');
// console.log(entry);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
