import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useStateValue } from "./StateProvider";

// Sample electronics items data (replace with API call or real data)
const electronicsItems = [
  {
    id: "1",
    title: "Numark Mixtrack Pro FX Built | DJ Controllers",
    price: 699.99,
    image: "https://i.pinimg.com/1200x/c8/04/51/c804510540446c3bb90da52a1d99c978.jpg",
    description: "Latest model with 5G and OLED display",
    reviews: 100,
    rating: 5.8,
  },
  {
    id: "2",
    title: "AEON STANDING GAS COOKER 60 X 60 CM 4+0 BURNER WITH STRONG PAN SUPPORT",
    price: 800.90,
    image: "https://i.pinimg.com/736x/51/b9/e4/51b9e4ed94f8b14b5052742e8bab03e3.jpg",
    description: "AEON STANDING GAS COOKER 60 X 60 CM 4+0 BURNER WITH STRONG PAN SUPPORT",
    reviews: 150,
    rating: 5.2,
  },
  {
    id: "3",
    title: "Pigeon by Stovekraft Favourite Glass Top 2 Burner Gas Stove",
    price: 350.49,
    image: "https://i.pinimg.com/1200x/e6/91/dc/e691dc6bf5a8bcf432604684486fb70a.jpg",
    description: "20-inch Pigeon by Stovekraft Favourite Glass Top 2 Burner Gas Stove",
    reviews: 97,
    rating: 2.5,
  },
  {
    id: "4",
    title: "Samsung MS23K3555EK Solo Microwave, 800W, 23 Litre, Black",
    price: 150.99,
    image: "https://i.pinimg.com/1200x/50/38/2c/50382cf0a543b65acd11ee35e1322cbb.jpg",
    description: "High-performance Samsung MS23K3555EK Solo Microwave, 800W, 23 Litre, Black",
    reviews: 76,
    rating: 5.8,
  },
  {
    id: "5",
    title: "JBL PartyBox 310",
    price: 1000.99,
    image: "https://i.pinimg.com/1200x/4f/79/1c/4f791c1bc7c7ffa998739c254dce6e0d.jpg",
    description: "High-performance JBL PartyBox 310",
    reviews: 102,
    rating: 3.5,
  },
  {
    id: "6",
    title: "Samsung 530L Refrigerator",
    price: 2000.99,
    image: "https://i.pinimg.com/1200x/d1/e1/dd/d1e1ddd4600d74b2c5318eb1e68867a0.jpg",
    description: "High-performance Samsung 530L Refrigerator",
    reviews: 105,
    rating: 4.5,
  },
  {
    id: "7",
    title: "Washing machine",
    price: 1300.99,
    image: "https://i.pinimg.com/1200x/0b/be/af/0bbeaff44f8440bb159c3d57d8ce9beb.jpg",
    description: "High-performance Washing machine",
    reviews: 89,
    rating: 3.9,
  },
  {
    id: "8",
    title: "Computer Mouse",
    price: 70.99,
    image: "https://i.pinimg.com/1200x/b5/a0/b8/b5a0b87939837bbae971ac15eb22b5b8.jpg",
    description: "High-performance computer keyboard Mouse",
    reviews: 67,
    rating: 4.8,
  },
];

const ElectronicsPage = () => {
  const [items, setItems] = useState([]);

  const [{ basket }, dispatch] = useStateValue();
  
  const addToBasket = (product) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        rating: product.rating,
        reviews: product.reviews,
      },
    });
  };

  useEffect(() => {
    const calculateSubtotal = () => {
      const subtotal = basket.reduce((acc, item) => acc + item.price, 0);
      dispatch({ type: "UPDATE_SUBTOTAL", payload: subtotal });
    };
    calculateSubtotal();
  }, [basket, dispatch]);

  // Simulate fetching items (replace with real API call)
  useEffect(() => {
    setItems(electronicsItems);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-accent">Electronics</h1>
          <p className="text-gray-600 mt-2">
            Discover the latest in technology with our wide range of electronics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <Link to={`/products/${product.id}`}>
                <div className="relative w-full h-64">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/products/${product.id}`} className="hover:text-blue-600">
                  <h3 className="font-medium text-lg line-clamp-2">{product.title}</h3>
                </Link>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                  <div className="flex items-center">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating )
                                ? "text-yellow-400"
                                : i < (product.rating )
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button
                  className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={() => addToBasket(product)}
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectronicsPage;