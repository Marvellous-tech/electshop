import React, { useState } from 'react';
import bigbirdfarmlogo from '../assets/bigbirdfarmlogo.png';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue, getBasketItemCount } from './StateProvider';
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [isOpen, setIsOpen] = useState(false);

    const signIn = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ email: "user@example.com", name: "Okenu" });
            }, 1000);
        });
    };

    const handleAuthentication = () => {
        if (user) {
            auth.signOut().then(() => {
                dispatch({
                    type: 'SET_USER',
                    user: null
                });
            }).catch((error) => {
                console.error("Sign out error:", error);
            });
        } else {
            signIn().then((user) => {
                dispatch({
                    type: 'SET_USER',
                    user: user
                });
            }).catch((error) => {
                console.error("Sign in error:", error);
            });
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-black text-white w-full p-2">
            <div className="flex flex-row justify-between items-center">
                <Link to="/">
                    <div className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                        <h2 className="text-xl ml-6 font-bold">Bigbirdfarm</h2>
                        <img
                            className="w-10 h-10 md:w-18 md:h-12"
                            src={bigbirdfarmlogo}
                            alt="Bigbirdfarm-logo"
                        />
                    </div>
                </Link>

                <div className="hidden md:flex items-center w-full md:w-96 relative mx-14 mr-1">
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full px-4 py-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 pr-12 transition-all"
                        />
                        <SearchIcon className="w-8 h-16 bg-white rounded-r-md  text-black" />
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link to="/products">
                        <span className="hover:text-yellow-400 cursor-pointer transition-colors">Products</span>
                    </Link>
                    <Link to="/categories">
                        <span className="hover:text-yellow-400 cursor-pointer transition-colors">Categories</span>
                    </Link>
                </div>


                <div className="flex items-center md:mr-2 lg:mr-8">
                    <Link to="/checkout">
                        <div className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer transition-colors relative">
                            <ShoppingCartIcon className="w-6 h-6" />
                            <span className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                {getBasketItemCount(basket)}
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="flex items-center gap-1">
                    {user ? (
                        <p className="hidden md:inline">Welcome {user.name}</p>
                    ) : (
                        <span className="hidden md:inline">Hello User</span>
                    )}
                    <Link to={!user && '/login'}>
                        <div
                            onClick={handleAuthentication}
                            className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer transition-colors"
                        >
                            <AccountCircleIcon className="w-6 h-6" />
                            <span className="hidden md:inline">{user ? 'LogOut' : 'Sign In'}</span>
                        </div>
                    </Link>
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={toggleMenu}
                        className="bg-amber-500 hover:bg-amber-600 h-full px-2 rounded-r-md transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden absolute top-0 right-0 bg-black w-64 h-screen p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Bigbirdfarm</h2>
                            <button
                                onClick={toggleMenu}
                                className="bg-amber-500 hover:bg-amber-600 h-full px-2 rounded-r-md transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className=" ml-4 bg-white text-black p-2 rounded-sm">
                            {user ? (
                                <p>Welcome {user.name}</p>
                            ) : (
                                <span>Hello User</span>
                            )}
                        </div>

                        <div className="flex flex-col left gap-2 mt-6 ml-4">
                            <Link to="/home">
                                <span className="hover:text-yellow-400 cursor-pointer transition-colors">Home</span>
                            </Link>
                            <Link to="/products">
                                <span className="hover:text-yellow-400 cursor-pointer transition-colors">Products</span>
                            </Link>
                            <Link to="/categories">
                                <span className="hover:text-yellow-400 cursor-pointer transition-colors">Categories</span>
                            </Link>
                        </div>

                        <div className="flex flex-col items-center gap-2 ml-4 mt-6 rounded-md bg-white">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full px-4 py-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 pr-12 transition-all"
                                />
                                <SearchIcon className="w-8 h-16 bg-white border-solid rounded-r-md  text-black" />
                            </div>
                        </div>

                        <div className="flex flex-col left gap-2 mt-4 ml-4">
                            <Link to={!user && '/login'}>
                                <div
                                    onClick={handleAuthentication}
                                    className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer transition-colors"
                                >
                                    <AccountCircleIcon className="w-6 h-6" />
                                    <span>{user ? 'LogOut' : 'Sign In'}</span>
                                </div>
                            </Link>
                        </div>

                        <div className="flex flex-col left mt-4">
                            <Link to="/checkout">
                                <div className="flex items-center hover:text-yellow-400 cursor-pointer transition-colors relative">
                                    <ShoppingCartIcon className="w-6 h-6" />
                                    <span className="absolute -top-2  bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                        {getBasketItemCount(basket)}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Header;