const fetchAPI = async (QUERY) => fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);

const results = [];

const fetchProducts = async (QUERY) => { 
  // seu código aqui
  try {
    if (typeof QUERY === 'undefined') {
      throw new Error('You must provide an url');
    }
    const getAPI = await fetchAPI(QUERY)
      .then((response) => response.json())
      .then((e) => e.results);
    const arr = getAPI.map(async (e) => {
      const { id, title, thumbnail } = e; 
      results.push({ id, title, thumbnail });
      return { id, title, thumbnail };
    });
    return arr;
  } catch (error) {
    throw await error.message;
  }
};

const arr = fetchProducts('computador'); 

// console.log(results); 

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
