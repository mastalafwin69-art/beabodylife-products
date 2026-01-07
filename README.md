# Beabodylife Products Manager

Amazon affiliate product management system for Beabodylife website.

## Quick Start

1. **Edit products.json** - Add/update your Amazon affiliate products
2. **Update affiliate_tag** - Replace with your Amazon affiliate ID
3. **Deploy website** - Use the HTML code that references this JSON

## JSON Structure

```json
{
  "id": "Amazon ASIN or custom ID",
  "name": "Product name",
  "category": "fitness|skincare|jewelry|watches",
  "price": 49.99,
  "original_price": 69.99, // Optional
  "rating": 4.8,
  "reviews": 1245,
  "image": "URL to product image",
  "amazon_asin": "B08XYZ1234",
  "description": "Product description",
  "features": ["Feature 1", "Feature 2"],
  "prime": true,
  "in_stock": true,
  "badge": "Sale|New|Bestseller" // Optional
}
