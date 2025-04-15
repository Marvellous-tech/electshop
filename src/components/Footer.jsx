
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-auto">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Bigbirdfarm</h3>
            <p className="text-sm text-gray-300">
              Your one-stop shop for all your Agro needs. Quality products, excellent service.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-gray-300 hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-gray-300 hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-sm text-gray-300 hover:text-white">
                  Featured
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-sm text-gray-300 hover:text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-sm text-gray-300 hover:text-white">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-gray-300 hover:text-white">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">
                Hossana Glory Estate, Lugbe, Abuja
              </li>
              <li className="text-sm text-gray-300">
                bigbirdfarm@gmail.com
              </li>
              <li className="text-sm text-gray-300">
                +234 - 8104749270
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Bigbirdfarm. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;