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
          <p>Sell Again and Again</p>
        </a>
      </div>

    <div>
      <a href="/cart">Cart 🛒</a> 
    </div>
    </header>


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