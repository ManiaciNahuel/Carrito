
import {   useState } from 'react';
import './App.css';
import { productList as initialProducts} from './components/data/data';
import { Header } from './components/Header';
import { useFilters } from './hooks/useFilters';
import { Cart } from './components/Cart';
import { CartProvider } from './context/cart';
import { HomeProducts } from './pages/HomeProducts';
import { Footer } from './components/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';




function App() {
  const [productList] = useState(initialProducts) 
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(productList)
  
  return (
    <BrowserRouter>
      <CartProvider>
      <Header />
        <Routes>
          <Route  path="/*" element = { <Navigate to='/' replace /> }/>
        </Routes>
      <Cart />
      <HomeProducts products={filteredProducts} />
      <Footer />
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
