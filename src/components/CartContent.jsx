import React from 'react';
import { Link } from 'react-router-dom';

function CartContent({
  id,
  title,
  image,
  price,
  rating,
//   description,
  reviews,
  quantity,
  onQuantityChange,
  onRemove,
}) {
  return (
    <div className="bg-white p-4 sm:p-6 mb-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        {/* Image Section */}
        <div className="w-full sm:w-32 md:w-40 h-32 md:h-40 flex-shrink-0">
          <div className="w-full h-full overflow-hidden rounded-md">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col gap-3">
          <Link to={`/products/${id}`}>
            <h2 className="text-lg font-semibold hover:underline">{title}</h2>
          </Link>
          {/* <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">{description}</p> */}

          {/* Price and Quantity */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-base sm:text-lg font-bold text-gray-900">
              <span className="text-xs sm:text-sm text-gray-600">$</span>
              {(price * quantity).toFixed(2)}
            </p>
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => onQuantityChange(id, Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-800 text-sm"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-8 text-center text-sm text-gray-900">{quantity}</span>
              <button
                onClick={() => onQuantityChange(id, quantity + 1)}
                className="w-8 h-8 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-800 text-sm"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            <span className="text-xs sm:text-sm text-gray-500 ml-1">
              ({reviews || 0})
            </span>
          </div>

          {/* Remove Button */}
          <button
            onClick={onRemove}
            className="self-start text-red-600 hover:text-red-800 text-xs sm:text-sm font-medium hover:underline transition-colors"
          >
            Remove from Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartContent;