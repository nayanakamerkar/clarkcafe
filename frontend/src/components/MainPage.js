// client/src/components/MainPage.js
import React from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import HeroBanner from './HeroBanner';
import CategoryList from './CategoryList';

const productList = [
  {
    id: "an",
    productName: 'Pepsi',
    productImage: 'path/to/image.jpg',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    progress1: 80,
    progress2: 30,
    progress3: 80,
    price: 90
  },
  {
    id: "ana",
    productName: 'Pepsi2',
    productImage: 'path/to/image.jpg',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    progress1: 80,
    progress2: 30,
    progress3: 80,
    price: 30
  },

]


const MainPage = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Container>
        <CategoryList />
      </Container>
      <CartProvider>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Container maxWidth="lg">
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {productList.map(product =>
                  <Grid item xs={2} sm={4} md={4} key={product.id}>
                    <ProductCard product={product} />
                  </Grid>
                )}
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Cart></Cart>
          </Grid>
        </Grid>
      </CartProvider>

    </div>
  );
};

export default MainPage;
