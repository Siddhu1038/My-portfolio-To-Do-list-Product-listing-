const products = [
  { name: 'Phone', category: 'electronics', price: 500, rating: 4.5 },
  { name: 'Jeans', category: 'fashion', price: 60, rating: 4.0 },
  { name: 'Laptop', category: 'electronics', price: 1000, rating: 4.8 },
  { name: 'Shirt', category: 'fashion', price: 30, rating: 3.8 },
  { name: 'T-shirt', category: 'fashion', price: 50, rating: 3.9 },
  { name: 'Jane Eyre', category: 'books', price: 60, rating: 4.3 },
  { name: 'Tablate', category: 'electronics', price: 800, rating: 4.3 },
  { name: 'Lord of the Flies', category: 'books', price: 100, rating: 4.0 },
  { name: 'The Grate Gatsby', category: 'books', price: 120, rating: 4.2 },
];

function filterAndSort() {
  const category = document.getElementById('categoryFilter').value;
  const sortBy = document.getElementById('sortFilter').value;

  let filtered = category === 'all' ? products : products.filter(p => p.category === category);

  if (sortBy === 'price') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<h3>${p.name}</h3><p>Category: ${p.category}</p><p>Price: $${p.price}</p><p>Rating: ${p.rating}</p>`;
    productList.appendChild(div);
  });
}

filterAndSort();