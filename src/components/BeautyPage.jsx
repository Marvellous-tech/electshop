import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Sample electronics items data (replace with API call or real data)
const beautyItems = [
  {
    id: "1",
    name: "Smartphone X",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897728d68d",
    description: "Latest model with 5G and OLED display",
  },
  {
    id: "2",
    name: "Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba18bc6",
    description: "Noise-canceling over-ear headphones",
  },
  {
    id: "3",
    name: "4K Smart TV",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1593787817844-6d69b06e27af",
    description: "55-inch LED TV with streaming apps",
  },
  {
    id: "4",
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "High-performance laptop with RTX graphics",
  },
  {
    id: "4",
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "High-performance laptop with RTX graphics",
  },
  {
    id: "4",
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "High-performance laptop with RTX graphics",
  },
  {
    id: "4",
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "High-performance laptop with RTX graphics",
  },
  {
    id: "4",
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "High-performance laptop with RTX graphics",
  },
  {
    id: "4",
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "High-performance laptop with RTX graphics",
  },
  {
    id: "4",
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "High-performance laptop with RTX graphics",
  },
  {
    id: "4",
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "High-performance laptop with RTX graphics",
  },
  {
    id: "4",
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "High-performance laptop with RTX graphics",
  },
];

const BeautyPage = () => {
  const [items, setItems] = useState([]);

  // Simulate fetching items (replace with real API call)
  useEffect(() => {
    setItems(beautyItems);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-accent">Clothings</h1>
          <p className="text-gray-600 mt-2">
            Discover the latest in technology with our wide range of electronics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.length > 0 ? (
            items.map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className="group block"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-accent">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                    <p className="text-xl font-bold text-primary mt-2">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center">
              No electronics items available at the moment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BeautyPage;