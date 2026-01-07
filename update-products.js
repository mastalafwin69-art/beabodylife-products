
**3. `update-products.js`** (Automation script)
```javascript
// Product update automation script
// Run with: node update-products.js

const fs = require('fs');

// Sample function to add a new product
function addProduct(productData) {
  const data = JSON.parse(fs.readFileSync('products.json', 'utf8'));
  
  data.products.push({
    id: productData.id || `prod-${Date.now()}`,
    name: productData.name,
    category: productData.category,
    price: productData.price,
    original_price: productData.original_price,
    rating: productData.rating || 4.0,
    reviews: productData.reviews || 0,
    image: productData.image,
    amazon_asin: productData.amazon_asin,
    description: productData.description,
    features: productData.features || [],
    prime: productData.prime || false,
    in_stock: productData.in_stock || true,
    badge: productData.badge
  });
  
  data.last_updated = new Date().toISOString().split('T')[0];
  
  fs.writeFileSync('products.json', JSON.stringify(data, null, 2));
  console.log('Product added successfully!');
}

// Export for GitHub Actions
module.exports = { addProduct };
