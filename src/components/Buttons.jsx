// src/components/ui/button.jsx
import React from 'react';

function Button({ children, className = '', onClick, disabled, variant = 'default', size = 'default', asChild = false }) {
  // Base styles for the button
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';

  // Variant styles
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100',
  };

  // Size styles
  const sizes = {
    default: 'px-4 py-2 text-sm',
    icon: 'p-2',
  };

  // Combine styles
  const buttonStyles = `${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  // Render as a different element if asChild is true (e.g., wrap children without adding a button tag)
  if (asChild) {
    return (
      <span className={buttonStyles} onClick={!disabled ? onClick : undefined}>
        {children}
      </span>
    );
  }

  return (
    <button className={buttonStyles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;