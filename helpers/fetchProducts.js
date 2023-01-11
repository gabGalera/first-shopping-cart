// const fetch = require('node-fetch');

const fetchAPI = async (QUERY) => fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);

const result = [];

const fetchProducts = async (QUERY) => { 
  // seu código aqui
  try {
    if (typeof QUERY === 'undefined') {
      throw new Error('You must provide an url');
    }
    const getAPI = await fetchAPI(QUERY)
      .then((response) => response.json());
      // .then((e) => e.results);
    const { results } = getAPI;
    results.forEach(async (e) => {
      const { id, title, thumbnail, price } = e; 
      result.push({ id, title, thumbnail, price });
      return result;
    });
    return getAPI;
  } catch (error) {
    throw await error.message;
  }
};

// console.log(results); 

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
