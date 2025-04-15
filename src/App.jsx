import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CartItems from './components/CartItems';
import Login from './components/Login';
import Register from "./components/Register";
import LoginLayout from './components/LoginLayout';
import FeaturedCategories from './components/FeatureCategories.jsx';
import ProductsPage from './components/ProductsPage';
import ProductDetailPage from './components/ProductDetailPage';
import ElectronicsPage from "./components/ElectronicsPage";
import ClothingPage from "./components/ClothingPage";
import HomeAndKitchenPage from "./components/HomeAndKitchenPage";
import BeautyPage from "./components/BeautyPage";
import reducer,  { initialState } from "./components/reducer.jsx";
import { StateProvider } from './components/StateProvider.jsx';
import { auth } from "./components/firebase.js";
import Footer from './components/Footer.jsx';

function App() {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginLayout><Login /></LoginLayout>} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/checkout" element={
            <>
              <Header />
              <CartItems />
              <Footer />
            </>
          } />
          <Route path="/" element={<FeaturedCategories />} />
          <Route path="/categories/electronics" element={
            <>
              <Header />
              <ElectronicsPage />
              <Footer />
            </>
          } />
          <Route path="/categories/clothing" element={
            <>
              <Header />
              <ClothingPage />
              <Footer />
            </>
          } />
          <Route path="/categories/home" element={
            <>
              <Header />
              <HomeAndKitchenPage />
              <Footer />
            </>
          } />
          <Route path="/categories/beauty" element={<BeautyPage />} />
          <Route path="/products" element={
            <>
              <Header />
              <ProductsPage />
              <Footer />
            </>
          } />
          <Route path="/product/:id" element={
            <>
              <Header />
              <ProductDetailPage />
              <Footer />
            </>
          } /> 
          {/* Add routes for other categories or product pages as needed */}
          {/* <Route path="/categories/:categoryId" element={<GenericCategoryPage />} /> */}
        </Routes>
      </Router>
    </StateProvider>
  );
}

export default App;