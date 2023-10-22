// client/src/components/MainPage.js
import React from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';

const product = {
  productName: 'Pepsi',
  productImage: 'path/to/image.jpg',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  progress1: 80,
  progress2: 30,
  progress3: 80,
};

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Clark Cafe</h1>
      <ProductCard product={product} />
    </div>
  );
};

export default MainPage;
