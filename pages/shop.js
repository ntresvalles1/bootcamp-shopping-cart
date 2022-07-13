import React from 'react';
import Head from '../components/head';
import Link from 'next/link';


import { Container, Typography } from '@material-ui/core'
import ShoppingItemList from '../components/ShopItemList';
import { Minimize } from '@material-ui/icons';


export const ShopPage = () => (
  <Container>
    <Head title='Home'/>
    <header className="row block center">
      <div>
        <a href="#/">
        {/* <img 
        src="https://cdn.shopify.com/s/files/1/0605/6997/7058/collections/6_1200x800.jpg?v=1639469846"
        /> */}
          <p>Sell Again and Again</p>
        </a>
      </div>

    <div>
      <a href="/cart">Cart 🛒</a> 
    </div>
    </header>

    <div class ="center-image">
      <img 
        src="https://cdn.shopify.com/s/files/1/0605/6997/7058/collections/6_1200x800.jpg?v=1639469846"
      />
    </div>

    <br/>
    <main className="block col-1">
      <h2>Products</h2>
    </main>

    <div>
      <ShoppingItemList/>
    </div>
  </Container>
);

export default ShopPage;