import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Layout/Hero';
import LotsList from './components/Lots/LotsList';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart/Cart';
import CartProvider from './Store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Hero />
        <LotsList />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
