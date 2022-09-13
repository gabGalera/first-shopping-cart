const fetchAPI = async (ItemID) => fetch(`https://api.mercadolibre.com/items/${ItemID}`);

const fetchItem = async (ItemID) => {
  // seu código aqui
  try {
    if (typeof ItemID === 'undefined') {
      throw new Error('You must provide an url');
    }
    const getAPI = fetchAPI(ItemID)
      .then((response) => response.json());
    return getAPI;
  } catch (error) {
    throw await error.message;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
