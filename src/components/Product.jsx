// // components/Product.jsx
// import React from 'react';
// import { useStateValue } from './StateProvider';

// export default function Product({ id, title, description, price, image='./assets/product.jpg' }) {
//     const [{ basket }, dispatch] = useStateValue();
//     console.log(basket);
    
//     const addToBasket = () => {
//         // dispatch(pushing data) item into the data layer
//         dispatch({
//             type: "ADD_TO_BASKET",
//             item: {
//                 id: id,
//                 image: image,
//                 title: title,
//                 description: description,
//                 price: price,
//                 quantity: 1
//             }
//         })
//     }
//   return (
//     <div className="flex flex-col items-center justify-center p-2 md:p-2 lg:p-2 gap-2 ">
//         <div className="border-2 border-amber-500 rounded-md">
//             <img
//             src={image}
//             alt="Product Image"
//             className="w-full h-48 md:h-64 lg:h-80 object-cover mb-4 rounded-t-md"
//             />
//             <div className="p-4">
//                 <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{title}</h2>
//                 <p className="text-sm md:text-base lg:text-lg mb-4">{description}</p>
//                 <div className="flex justify-between">
//                     <p className="text-lg md:text-xl lg:text-2xl font-sm">${price}</p>
//                     <div className="bg-amber-500 hover:bg-amber-600 p-2  w-13 h-10 rounded-lg">
//                         <button className="text-white" onClick={addToBasket}>Add to cart</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }