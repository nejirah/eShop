import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/home';
import NavBarComponent from './components/common/Navbar';
import ProductsPage from './components/pages/products';

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
