
export async function fetchProducts({ category, sort }) {
  let url = 'https://fakestoreapi.com/products';

  // Filter by category
  if (category) {
    url += `/category/${category}`;
  }

  const res = await fetch(url);
  let products = await res.json();

  // Sort products
  if (sort === 'price_asc') {
    products.sort((a, b) => a.price - b.price);
  } else if (sort === 'price_desc') {
    products.sort((a, b) => b.price - a.price);
  } else if (sort === 'title_asc') {
    products.sort((a, b) => a.title.localeCompare(b.title));
  }

  return products;
}
