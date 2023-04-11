import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarComponent from './components/homepage/navbar';
import ProductComericalComponent from './components/homepage/productComercial';
import MoreProductsComponent from './components/homepage/moreProducts';
import CategoriesComponent from './components/homepage/categories';
import OfferComponent from './components/homepage/offer';

function App() {
  return (
    <div className="App">
      <NavBarComponent/>
      <ProductComericalComponent/>
      <MoreProductsComponent/>
      <CategoriesComponent/>
      <OfferComponent/>
    </div>
  );
}

export default App;

