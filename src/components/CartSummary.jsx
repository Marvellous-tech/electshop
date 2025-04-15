import React, { useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import { useStateValue } from './StateProvider';
// import { getBasketTotal } from './StateProvider';

function CartSummary() {
    const [{ basket, subtotal }, dispatch] = useStateValue();

    // new changes
    useEffect(() => {
        const calculateSubtotal = () => {
          const subtotal = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
          dispatch({ type: "UPDATE_SUBTOTAL", payload: subtotal });
        };
        calculateSubtotal();
    }, [basket, dispatch]);
    

    const totalQuantity = basket.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="subtotal p-6 bg-white rounded shadow-md sticky top-1/4">
        <NumericFormat
            renderText={(value) => (
            <>
                <p className="mb-4 text-gray-700">
                Subtotal ({totalQuantity} items):{" "}
                <strong className="text-2xl font-bold text-gray-900">{value}</strong>
                </p>
                <small className="gift-option flex items-center gap-2 mb-6 text-gray-600">
                <input 
                    type="checkbox" 
                    className="w-4 h-4 border-gray-300 rounded text-amber-500 focus:ring-amber-500 cursor-pointer hover:border-amber-500" 
                />{" "}
                This order contains a gift
                </small>
            </>
            )}
            value={subtotal}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
            decimalScale={2}
            fixedDecimalScale={true}
        />
  
        <div className="checkout-button bg-amber-500 hover:bg-amber-600 transition-colors w-full rounded-md cursor-pointer shadow-sm">
            <button className="text-white font-medium w-full py-3 px-4 text-center uppercase tracking-wide text-sm">
            Proceed to Checkout
            </button>
        </div>
    </div>
  );
}

export default CartSummary;