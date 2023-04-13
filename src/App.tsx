import React from 'react';
import NavBarComponent from './components/Navbar';
import ProductComericalComponent from './components/homepage/ProductComercial';
import MoreProductsComponent from './components/homepage/MoreProducts';
import CategoriesComponent from './components/homepage/Categories';
import OfferComponent from './components/homepage/Offer';

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

