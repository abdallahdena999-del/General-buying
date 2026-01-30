// Placeholder for products and cart
const products = []; // Initially empty
let cart = [];

// Display products
function displayProducts() {
  const productList = document.getElementById('productList');
  if(!products.length) { productList.innerHTML='<p>No items added yet.</p>'; return; }
}

// Simple search (placeholder)
document.getElementById('searchInput')?.addEventListener('input', function(e){
  const query = e.target.value.toLowerCase();
});