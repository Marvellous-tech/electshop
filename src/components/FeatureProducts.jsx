// import { Link } from "react-router-dom";
// import { ShoppingCart } from "lucide-react";
// import { useStateValue } from './StateProvider';
// import { useEffect } from 'react';

// const featuredProducts = [
//   {
//     id: "1",
//     title: "Wireless Bluetooth Headphones",
//     price: 129.99,
//     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     rating: 4.5,
//     reviews: 128,
//   },
//   {
//     id: "2",
//     title: "Ps5",
//     price: 800.99,
//     image: "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     rating: 6.2,
//     reviews: 106,
//   },
//   {
//     id: "3",
//     title: "Smart Home Speaker",
//     price: 89.99,
//     image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
//     rating: 4.7,
//     reviews: 152,
//   },
//   {
//     id: "4",
//     title: "Minimalist Watch",
//     price: 150.99,
//     image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1688&q=80",
//     rating: 4.8,
//     reviews: 53,
//   },
//   {
//     id: "5",
//     title: "iphone 15 pro max",
//     price: 300.99,
//     image: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     rating: 6.8,
//     reviews: 93,
//   },
//   {
//     id: "6",
//     title: "Dell Laptop",
//     price: 1000.99,
//     image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     rating: 5.8,
//     reviews: 83,
//   },
// ];

// const FeaturedProducts = () => {
//   const [{ basket }, dispatch] = useStateValue();

//   const addToBasket = (product) => {
//     dispatch({
//       type: "ADD_TO_BASKET",
//       item: {
//         id: product.id,
//         image: product.image,
//         title: product.title,
//         price: product.price,
//         rating: product.rating,
//         reviews: product.reviews,
//       },
//     });
//   };

//   useEffect(() => {
//     const calculateSubtotal = () => {
//       const subtotal = basket.reduce((acc, item) => acc + item.price, 0);
//       dispatch({ type: "UPDATE_SUBTOTAL", payload: subtotal });
//     };
//     calculateSubtotal();
//   }, [basket, dispatch]);

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container px-4 mx-auto">
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
//           <div>
//             <h2 className="text-3xl font-bold text-blue-600">Featured Products</h2>
//             <p className="text-gray-600 mt-2">
//               Our most popular products based on sales
//             </p>
//           </div>
//           <Link
//             to="/products"
//             className="mt-4 sm:mt-0 font-medium text-blue-600 hover:underline"
//           >
//             View all products
//           </Link>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {featuredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white h-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//             >
//               <Link to={`/products/${product.id}`}>
//                 <div className="relative w-full size-40 h-72">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//               </Link>
//               <div className="p-4">
//                 <Link to={`/products/${product.id}`} className="hover:text-blue-600">
//                   <h3 className="font-medium text-lg line-clamp-2">{product.title}</h3>
//                 </Link>
//                 <div className="flex justify-between items-center mt-2">
//                   <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
//                   <div className="flex items-center">
//                     <div className="flex">
//                       {Array(5)
//                         .fill(0)
//                         .map((_, i) => (
//                           <svg
//                             key={i}
//                             className={`w-4 h-4 ${
//                               i < Math.floor(product.rating)
//                                 ? "text-yellow-400"
//                                 : i < product.rating
//                                 ? "text-yellow-400 fill-current"
//                                 : "text-gray-300"
//                             }`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                           </svg>
//                         ))}
//                     </div>
//                     <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-4 pt-0">
//                 <button
//                   className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
//                   onClick={() => addToBasket(product)}
//                 >
//                   <ShoppingCart className="h-4 w-4" />
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;

import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';

const featuredProducts = [
  {
    id: "1",
    title: "Wireless Bluetooth Headphones",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "2",
    title: "Ps5",
    price: 800.99,
    image: "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 6.2,
    reviews: 106,
  },
  {
    id: "3",
    title: "Smart Home Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    rating: 4.7,
    reviews: 152,
  },
  {
    id: "4",
    title: "Minimalist Watch",
    price: 150.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1688&q=80",
    rating: 4.8,
    reviews: 53,
  },
  {
    id: "5",
    title: "iphone 15 pro max",
    price: 300.99,
    image: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 6.8,
    reviews: 93,
  },
  {
    id: "6",
    title: "Dell Laptop",
    price: 900.99,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.8,
    reviews: 83,
  },
];

const FeaturedProducts = () => {
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-600">Featured Products</h2>
            <p className="text-gray-600 mt-2">
              Our most popular products based on sales
            </p>
          </div>
          <Link
            to="/products"
            className="mt-4 sm:mt-0 font-medium text-blue-600 hover:underline"
          >
            View all products
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white h-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <Link to={`/products/${product.id}`}>
                <div className="relative w-full size-40 h-72">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                              i < Math.floor(product.rating)
                                ? "text-yellow-400"
                                : i < product.rating
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

export default FeaturedProducts;