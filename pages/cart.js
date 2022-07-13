import React from 'react';
import Head from '../components/head';
import Link from 'next/link';

import { Container, Typography } from '@material-ui/core'
import Cart from '../components/CartList'

export const CartPage = () => (
  <Container>
    <Head title='Cart'/>
    <header className="row block center">
      <div>
        <a href="#/">
          <p>My Cart</p>
        </a>
      </div>

    <div>
      <a href="/shop">View Shop</a> 
    </div>
    </header>

    <br/>
    <main className="block col-1">
      <h2>Cart Items</h2>
    </main>

    <br/>

    <div>
      <Cart/>
    </div>

  </Container>
);

export default CartPage;