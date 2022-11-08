import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Product from './component/Product';
import Review from './component/Review';
import SwiperComponent from './component/SwiperComponent';
import Virtual from './component/Virtual';
import './index.css'

function App() {
  return (
    <div className='bg-theme overflow-hidden scrollbar-hide'>
      <Header />
      <div className='bg-theme h-full'>
        <Home />
        <SwiperComponent />
      </div>
      <Virtual />
      <Product />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
