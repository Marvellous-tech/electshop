import { useState } from "react";
import Layout from './Layout';
import { Search } from "lucide-react";
import Header from "./Header";

const allProducts = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.5,
    reviews: 128,
    category: "electronics"
  },
  {
    id: "2",
    name: "Premium Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    rating: 4.2,
    reviews: 86,
    category: "clothing"
  },
  {
    id: "3",
    name: "Smart Home Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    rating: 4.7,
    reviews: 152,
    category: "electronics"
  },
  {
    id: "4",
    name: "Minimalist Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1688&q=80",
    rating: 4.8,
    reviews: 93,
    category: "accessories"
  },
  {
    id: "5",
    name: "Professional Camera",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    rating: 4.9,
    reviews: 64,
    category: "electronics"
  },
  {
    id: "6",
    name: "Leather Wallet",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
    rating: 4.3,
    reviews: 107,
    category: "accessories"
  },
  {
    id: "7",
    name: "Stainless Steel Water Bottle",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 4.6,
    reviews: 78,
    category: "home"
  },
  {
    id: "8",
    name: "Wireless Earbuds",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.4,
    reviews: 203,
    category: "electronics"
  },
];

const categories = [
  { id: "electronics", name: "Electronics" },
  { id: "clothing", name: "Clothing" },
  { id: "accessories", name: "Accessories" },
  { id: "home", name: "Home & Kitchen" },
];

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 700]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return matchesSearch && matchesPrice && matchesCategory;
  });

  return (
    <>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-4">Search</h3>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 border rounded-md w-full py-2 px-3"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`category-${category.id}`}
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => handleCategoryChange(category.id)}
                    />
                    <label htmlFor={`category-${category.id}`}>{category.name}</label>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="border rounded-md py-2 px-4"
              onClick={() => {
                setSearchQuery("");
                setPriceRange([0, 700]);
                setSelectedCategories([]);
              }}
            >
              Reset Filters
            </button>
          </div>

          <div className="md:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="border rounded-md p-4">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-gray-600">${product.price}</p>
                    <p className="text-sm text-gray-500">Rating: {product.rating} ({product.reviews} reviews)</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No products found</h3>
                <p className="text-gray-600 mt-2">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;