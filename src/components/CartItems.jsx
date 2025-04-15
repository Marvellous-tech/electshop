import React, { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import ads from '../assets/ads.jpg';
import CartSummary from './CartSummary';
import CartContent from './CartContent';
// import FeatureProducts from './FeatureProducts';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    const calculateSubtotal = () => {
      const subtotal = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
      dispatch({ type: 'UPDATE_SUBTOTAL', payload: subtotal });
    };
    calculateSubtotal();
  }, [basket, dispatch]);

  const updateQuantity = (id, newQuantity) => {
    const item = basket.find((item) => item.id === id);
    if (item) {
      if (newQuantity === 0) {
        dispatch({
          type: 'REMOVE_FROM_BASKET',
          id: id,
        });
      } else {
        dispatch({
          type: 'UPDATE_QUANTITY',
          payload: { id, newQuantity },
        });
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full bg-white ">
      <div className="flex-1 bg-white rounded-lg shadow-md ml-4 mt-4 mb-4">
        <img
          className="w-full h-32 sm:h-48 md:h-64 object-cover rounded-t-lg"
          src={ads}
          alt="banner"
        />
        <div className="p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Your Shopping Basket
          </h1>
          <div className="w-full max-w-[90rem] mx-auto px-0 sm:px-4 py-4 bg-white">
            {basket.length === 0 ? (
              <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 py-8">
                Your basket is empty.
              </p>
            ) : (
              <div className="space-y-4">
                {basket.map((item) => (
                  <CartContent
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    rating={item.rating}
                    reviews={item.reviews}
                    quantity={item.quantity}
                    onRemove={() =>
                      dispatch({ type: 'REMOVE_FROM_BASKET', id: item.id })
                    }
                    onQuantityChange={updateQuantity}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="lg:w-80 bg-white rounded-lg shadow-md p-2 sm:p-6 mr-4 mt-4 mb-4">
        <CartSummary />
      </div>
    </div>  
  );
}

export default Checkout;