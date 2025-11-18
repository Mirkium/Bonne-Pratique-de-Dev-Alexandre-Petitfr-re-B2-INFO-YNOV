const products = [
  { name: 'Clavier gaming', price: 79, inStock: true, onSale: false },
  { name: 'Souris sans fil', price: 49, inStock: true, onSale: true },
  { name: 'Écran 27"', price: 249, inStock: false, onSale: true },
  { name: 'Casque audio', price: 129, inStock: true, onSale: false }
];

const listEl = document.querySelector('#products-list');
const emptyStateEl = document.querySelector('#empty-state');

const showAllBtn = document.querySelector('#show-all-btn');
const inStockBtn = document.querySelector('#in-stock-btn');
const onSaleBtn = document.querySelector('#on-sale-btn');

function show(filtered) {
  listEl.innerHTML = '';

  if (filtered.length === 0) {
    emptyStateEl.textContent = 'Aucun produit correspondant.';
    emptyStateEl.style.display = 'block';
    return;
  } else {
    emptyStateEl.style.display = 'none';
  }

  filtered.forEach(product => {
    const li = document.createElement('li');
    li.className = 'product-card';
    li.innerHTML = `
      <h3>${product.name}</h3>
      <p>Prix : ${product.price} €</p>
    `;
    listEl.appendChild(li);
  });
}

function filter(type) {
  let filtered = products;
  if (type != null) {
    filtered = products.filter(p => p[type]);
  }

  show(filtered);
}

showAllBtn.addEventListener('click', () => filter());
inStockBtn.addEventListener('click', () => filter('inStock'));
onSaleBtn.addEventListener('click', () => filter('onSale'));
