// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */

const tp = 'total-price';

const createPriceElement = () => {
  const section = document.createElement('section');
  section.className = tp;
  document.getElementsByClassName('empty-cart')[0].insertAdjacentElement('afterend', section);
};

createPriceElement();

let totalPrice = 0.00;

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.id = id;
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', () => {
    document.getElementById(id).remove();
    totalPrice -= price;
    totalPrice = Math.round(totalPrice * 100) / 100;
    document.getElementsByClassName(tp)[0].innerText = totalPrice; 
  });
  return li;
};

const colocaNoCarrinho = async (id) => {
  const listaItems = await fetchItem(id);
  const items = createCartItemElement(listaItems);
  document.getElementsByClassName('cart__items')[0].appendChild(items);
  saveCartItems(listaItems);
  totalPrice += listaItems.price;
  totalPrice = Math.round(totalPrice * 100) / 100;
  localStorage.setItem('price', totalPrice);
  document.getElementsByClassName(tp)[0].innerText = totalPrice; 
};

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', () => colocaNoCarrinho(id));
  
    return section;
  };

const baixaProdutos = async () => {
  const lista = document.getElementsByClassName('items');
  await result.forEach(async (e) => lista[0].appendChild(createProductItemElement(e)));
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

document.getElementsByClassName('empty-cart')[0].addEventListener('click', () => {
  const numeroProdutos = document.getElementsByClassName('cart__item').length;
  for (i = 0; i < numeroProdutos; i += 1) {
    document.getElementsByClassName('cart__items')[0].firstElementChild.remove();
  }
  localStorage.clear();
  totalPrice = 0.00;
  document.getElementsByClassName(tp)[0].innerText = totalPrice;
});

const createLoadingElement = async () => {
  const sec = document.createElement('section');
  if (document.getElementsByClassName('item').length === 0) {
    sec.innerText = 'carregando...';
    sec.className = 'loading';
    sec.style.color = 'white';
    document.getElementsByClassName('container-title')[0].insertAdjacentElement('afterend', sec);
  } else {
    document.getElementsByClassName('container-title')[0].nextElementSibling.remove();
  }
};

window.onload = async () => {
  createLoadingElement();
  await fetchProducts('computador');
  baixaProdutos(); 
  const report = getSavedCartItems();
  if (report !== null) {
    report.forEach(async (e) => {
      document.getElementsByClassName('cart__items')[0].appendChild(createCartItemElement(e));
    });
  }
  document.getElementsByClassName(tp)[0].innerText = localStorage.getItem('price');
  createLoadingElement();
};
