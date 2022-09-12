const fetchAPI = (QUERY) => fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);

const fetchProducts = async (QUERY) => { 
  // seu código aqui
  try {
    if (typeof QUERY === 'undefined') {
      throw new Error('Raiva');
    }
    const getAPI = await fetchAPI(QUERY);
    const response = await getAPI.json();
    return response;
  } catch (error) {
    throw await error.message;
  }
};

// console.log(fetchProducts()); 

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
