import React from 'react';
import Head from '../components/head';
import Link from 'next/link';

import { Container, Typography } from '@material-ui/core'
import Cart from '../components/CartList'

export const CartPage = () => (
  <Container>
    <Head title='Cart'/>
    <header className="row block center">
      {/* adds fonts for front-end from google */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Aleo:wght@400;700&family=Dancing+Script:wght@500&display=swap" rel="stylesheet"/>
      
      <div>
        <a href="#/">
          <p className="shopTitle"> My Cart </p>
        </a>
      </div>


    {/* adds font-awesome icons */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" 
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" 
          crossorigin="anonymous" 
          referrerpolicy="no-referrer" />

    <div>
      <a href="/shop">
        <i className="cartIcon fa-solid fa-store"> Shop </i>
      </a> 
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