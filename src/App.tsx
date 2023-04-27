import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/home';
import NavBarComponent from './components/common/Navbar';
import ProductsPage from './components/pages/products';
import ProductDetailsComponent from './components/pages/productDetails';
import { LinkText } from './constants/constants';

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/${LinkText.homepage}`} element={<HomePage />} />
        <Route path={`/${LinkText.products}`} element={<ProductsPage />} />
        <Route
          path={`/${LinkText.products}/${LinkText.productDetails}/:id`}
          element={<ProductDetailsComponent />}
        />
      </Routes>
    </>
  );
}

export default App;
