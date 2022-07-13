import React from 'react';
import Head from '../components/head';
import Link from 'next/link';

import { Container, Typography } from '@material-ui/core'
import Cart from '../components/CartList'

export const CartPage = () => (
  <Container>
    <Head title='Cart'/>
    <div>
      <Typography variant="h3"> My Cart </Typography>
    </div>
    <h2>Cart Items</h2>

    <div>
      <Link href="/shop">
        <a>View Shop</a>
      </Link>
    </div>
    <br/>

    <div>
      <Cart/>
    </div>

  </Container>
);

export default CartPage;